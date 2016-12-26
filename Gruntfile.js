
module.exports = function( grunt ){
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

    	compass: {                  // Task
			    dist: {                   // Target
		      		options: {              // Target options
		       		sassDir: 'assets/src/sass',
		        	cssDir: 'assets/src/css',
		        	environment: 'development'
		      }
      		}
		},
		concat: {
			options:{
				separator:"\n /*** New File ***/ \n"
			},

			/* Added new JS here*/	
			js: {
				src: [ 
				'./assets/src/js/wrapper/start.js',
				'./assets/src/js/vendor/jquery-1.11.2.js',
				'./node_modules/jquery.nicescroll/jquery.nicescroll.js',
				'./assets/src/js/classToggler.js',
				'./assets/src/js/main.js',
				'./assets/src/js/wrapper/end.js'
				],
				dest: './assets/dist/js/script.js'
			}
            
		},
		uglify: {
			options: {
				report: 'gzip'
			},
			main: {
				src: ['./assets/dist/js/script.js'],
				dest: './assets/dist/js/script.min.js'
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1,
				keepSpecialComments : 0,
				sourceMap: false
			},
			target: {
				files: [{
					expand: true,
					cwd: './assets/src/css/',
					src: ['*.css', '!*.min.css'],
					dest: './assets/dist/css/',
					ext: '.min.css'
				}]
			}
		},	
		copy: {
			main: {
		      files: [
		      		{ expand: true, cwd: './assets/src/img', src: '**', dest: './assets/dist/img/', filter: 'isFile'},
		      		{ expand: true, cwd: './assets/src/css', src: 'main.css', dest: './assets/dist/css/', filter: 'isFile'},
		      		{ expand: true, cwd: './node_modules/font-awesome/fonts', src: '**', dest: './assets/dist/fonts/', filter: 'isFile'}
		      ]
		  }
		},
		watch: {
			js : {
				files : ['./assets/src/js/*.js'],
				tasks : [ 'js' ]
			},
			css : {
				files : ['./assets/src/sass/**/*.scss', './assets/src/sass/**/**/*.scss', './assets/src/sass/*.scss'],
				tasks : [ 'css']
			}
		} 
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');

    //register grunt default task
    grunt.registerTask( 'css', ['compass', 'concat', 'cssmin'] );
    grunt.registerTask( 'js', [ 'concat', 'uglify', 'copy' ] );

    grunt.registerTask('default', ['compass','concat','uglify','cssmin','copy'] );
}
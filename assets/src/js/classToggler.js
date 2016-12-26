// notification 
+(function ($) {

    function mobileMenu(param) {

        this.animation = param.animation,
        this.toggler = param.toggler,
        this.exceptions = param.exceptions;

        this.init = function () {
            var that = this;
            // for stop propagation 
            var stopToggler = this.implode(this.exceptions);
            console.log(stopToggler);
            if (typeof stopToggler !== 'undefined') {  
                $(document).on('click', stopToggler, function (e) {
                    console.log('stoppropagation');
                    e.stopPropagation();
                    
                });
            }

            // for toggle class  
            var toggler = this.implode(this.toggler);
            if (typeof toggler !== 'undefined') {

                $(document).on('click touchstart', toggler, function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    that.toggle();
                });
            }
        }

        // open class toggler
        this.toggle = function () {
            var selectors = this.implode(this.animation);
            if (typeof selectors !== 'undefined') {
                $(selectors).toggleClass('open');
            }
        }

        // array selector maker
        this.implode = function (arr, imploder) {

            // checking arg is array or not
            if (!(arr instanceof Array)) {
                return arr;
            }
            // setting default imploder
            if (typeof imploder == 'undefined') {
                imploder = ',';
            }

            // making selector
            var data = arr;
            var ele = '';
            for (var j = 0; j < arr.length; j++) {
                ele += arr[j];
                if (j !== arr.length - 1) {
                    ele += imploder;
                }
            }
            data = ele;
            return data;
        }
    } //End mobileMenu 


    var notificationConfig = {
        animation: ['.ds-overlay', '.ds-sc-board', 'body', '#menu'], //where class add element
        exceptions: ['.sc-board'], //stop propagation
        toggler: ['#menu', '.ds-overlay', '.ds-sc-board .close'] //class toggler on click 
    };
    new mobileMenu(notificationConfig).init();


    var notificationConfig = {
        animation: '.menu-panel', //where class add element
        //exceptions: ['.sc-board'], //stop propagation
        toggler: '.setting-icon' //class toggler on click 
    };
    new mobileMenu(notificationConfig).init();

})(jQuery)
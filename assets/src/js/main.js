//NICE SCROLL
+(function ($) {
    $(document).ready(function () {
    // NICE SCROLL 
    $('body').niceScroll({
        cursoropacitymin: 0,
        cursoropacitymax: 0
    });

		$('#menu-setting').submit(function(){
      $(".menu-panel .button i").show();
			var that = $(this),
  				url = that.attr('action'),
  				type = that.attr('method'),
  				data = {};

  				that.find('[name]').each(function(index, value){
  					var that =$(this),
  						name = that.attr('name'),
  						value = that.val();
  						data[name] = value;
  				});

  				//AJAX REQUEST
  				$.ajax({
  					url:url,
  					type:type,
  					data:data,
  					success:function(response){
  						if(response == 'done'){
  							var button = that.find('button');
  							button.toggleClass('active').html('applyed');
  							setTimeout(function(){
  								location.reload(true);
  							},1500);
  						}else{
  							var button = that.find('button');
  							button.toggleClass('active').html('Error');
  						}
  					},
  					error:function(){
  						var button = that.find('button');
  							button.toggleClass('active').html('Error');
  					}

  				});
			return false;
		});

    });
})(jQuery);

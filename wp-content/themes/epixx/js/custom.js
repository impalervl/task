new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ), {
	type : 'cover'
} );

;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, '.scroller'));

$(document).ready(function(){
	(function prel(){
		var prel = $('.preload');
		if (prel.length <= 0)
			return;
		$(window).on('load', function(){
			setTimeout(function(){
				$('body').removeClass('prel');
				(function anim(){
					var anim = $('.anim');
					if (anim.length <= 0)
						return;
				    $(".anim").each(function() {
				        var $this = $(this),
				        data_anim = $this.attr('data-anim'),
				        data_delay = $this.attr('data-delay');
				        $this.inViewport(function(px){
				            if(px) {
				                $this
				                    .css({
				                        '-webkit-animation-delay': data_delay+'s',
				                        '-moz-animation-delay': data_delay+'s',
				                        'animation-delay': data_delay+'s'
				                    })
				                    .addClass('animated ' + data_anim);
				            }
				        });
				    });
				}());
			},1000);
		});
	}());

	(function rev_slide(){
		var rev_slide = $('.rev_slide');
		if (rev_slide.length <= 0)
			return;
		rev_slide.bxSlider({
			controls: true,
			pager: false
		});
	}());

	(function acc_wr(){
		var acc_wr = $('.acc_wr');
		if (acc_wr.length <= 0)
			return;
		$('.acc_title').on('click', function(){
			$(this).parents('li').toggleClass('open_acc').find('.acc_box').slideToggle(300);
		});
	}());

	(function fancy(){
		$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.png'],a[href$='.gif']").attr('rel', 'gallery').fancybox();
	}());
});
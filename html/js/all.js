/* map */
$(function(){
    $block = $('.js-map');

    if($block.length === 0) {
        return;
    }

    var $points = $('.b-map__elem',$block);

    $points.click(function(e){
        e.preventDefault();
        $points.removeClass('b-map__elem_cur');
        $(this).addClass('b-map__elem_cur');
    });


});
/*map*/

/* navigation */
$(function(){

});
/* navigation */


/* carousel */
(function($) {
    $(function() {
        /*
         Carousel initialization
         */
        $('.jcarousel')
            .jcarousel({
                // Options go here
            });

        /*
         Prev control initialization
         */
        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                // Options go here
                target: '-=1'
            });

        /*
         Next control initialization
         */
        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                // Options go here
                target: '+=1'
            });

        /*
         Pagination initialization
         */
        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination({
                'perPage': 4
            });
    });
})(jQuery);
/* carousel */
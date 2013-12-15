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


/* tabs */
$(function(){
/*    var $block = $('.js-full-reg');

    if ($block.length === 0) {
        return false;
    }*/

    $('.b-tab-nav__content').hide();

    $(".b-tab-nav_nav").tabs(".b-tab-nav__content", {
        // history: true,
        current: 'b-tab-nav__menu-box_active',
        tebs :'div.b-tab-nav__menu-box' ,
        effect: "slide",
        //slideUpSpeed: 300,
       // slideDownSpeed: 0,
        onBeforeClick: function (event, index) {
            // console.log('before');
            //   console.log(event);
            //  console.log(index);
            // console.log(this.getCurrentTab());
            // убрать папика
           // $(this.getCurrentTab()).parents('.b-tab-nav__menu-box').removeClass('b-tab-nav__menu-box_active');
        },
        onClick: function (event, index) {
           // $('.b-tab-nav__menu-box').removeClass('b-tab-nav__menu-box_active');

          //  $(this.getCurrentTab()).parents('.b-tab-nav__menu-box').addClass('b-tab-nav__menu-box_active');
        }
    });
});
/* tabs */




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



/* navigation*/
$(function() {

    // Do our DOM lookups beforehand
    var nav_container = $("c");
    var nav = $("nav");

    var top_spacing = 15;
    var waypoint_offset = 50;

    nav_container.waypoint({
        handler: function(event, direction) {

            if (direction == 'down') {

                nav_container.css({ 'height':nav.outerHeight() });
                nav.stop().addClass("sticky").css("top",-nav.outerHeight()).animate({"top":top_spacing});

            } else {

                nav_container.css({ 'height':'auto' });
                nav.stop().removeClass("sticky").css("top",nav.outerHeight()+waypoint_offset).animate({"top":""});

            }

        },
        offset: function() {
            return -nav.outerHeight()-waypoint_offset;
        }
    });

    var sections = $("section");
    var navigation_links = $("nav a");

    sections.waypoint({
        handler: function(event, direction) {

            var active_section;
            active_section = $(this);
            if (direction === "up") active_section = active_section.prev();

            var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
            navigation_links.removeClass("selected");
            active_link.addClass("selected");

        },
        offset: '25%'
    })


    navigation_links.click( function(event) {

        $.scrollTo(
            $(this).attr("href"),
            {
                duration: 200,
                offset: { 'left':0, 'top':-0.15*$(window).height() }
            }
        );
    });


});
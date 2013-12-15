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
$(function(){

});
/* carousel */
import $ from "jquery";
import 'slick-carousel';

$(function() {
   $('#work').slick({
    dots: true,
    slidesPerRow: 4,
    rows: 2,
   });
});
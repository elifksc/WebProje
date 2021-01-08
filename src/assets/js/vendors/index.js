import $ from "jquery";
import 'slick-carousel';

$(function() {
   $('#work').slick({
      dots: true,
      slidesPerRow: 4,
      rows: 2,
      arrows:false,
      responsive: [
         {
           breakpoint: 992,
           settings: {
            slidesPerRow: 3,
            rows: 2
           }
         },
         {
           breakpoint: 600,
           settings: {
            slidesPerRow: 2,
            rows: 1
           }
         },
         {
           breakpoint: 480,
           settings: {
            slidesPerRow: 1,
            rows: 1
           }
         }
      ],
       customPaging : function(slider, i) {
         return '<li><button></button></li>';
     },
   });
});
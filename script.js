// document.addEventListener("DOMContentLoaded", function () {
//     var tryout = 1;
//     function checkSplide() {
//         if (typeof Splide !== 'undefined') {
//             console.log('Splide IS AVAILABLE try : ' + tryout);
//             const splide = new Splide(".splide", {
//                 pagination: false
//             });
//             splide.mount();
//         } else {
//             console.log('Splide is not available try : ' + tryout);
//             tryout++
//             setTimeout(checkSplide, 500);
//         }
//     }
//     checkSplide();
// });
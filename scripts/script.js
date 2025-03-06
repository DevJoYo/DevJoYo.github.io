/*let item = document.getElementById("main");

  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) item.scrollLeft += 100;
    else item.scrollLeft -= 100;
  });

  */

  /*
  window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        // Scroll down, move right
        window.scrollBy(100, 0); // Scroll 100px to the right
    } else {
        // Scroll up, move left
        window.scrollBy(-100, 0); // Scroll 100px to the left
    }
}, { passive: true });
*/
//let screenWidth = window.innerWidth;


document.addEventListener('DOMContentLoaded', function() {
    let item = document.getElementById("main");

    if (item) {
        window.addEventListener('wheel', function(event) {
            if (event.deltaY > 0) {
                // Scroll down, move window right
                item.scrollLeft += 100; 
            } else {
                // Scroll up, move window left
                item.scrollLeft -= 100;
            }
        }, { passive: true });
    } else {
        console.error('main not found');
    }
});
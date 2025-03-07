document.addEventListener('DOMContentLoaded', function() {
    const view = document.getElementById("main");

    if (view) {
        window.addEventListener('wheel', function(event) {
            if (event.deltaY > 0) {
                // Scroll down, move window right
                view.scrollLeft += 100; 
            } else {
                // Scroll up, move window left
                view.scrollLeft -= 100;
            }
        }, { passive: true });
        window.addEventListener("keydown", function(event) {
            if(event.key === "ArrowLeft")
            {
                view.scrollLeft -= 100; 
            }
            else if(event.key === "ArrowRight")
            {
                view.scrollLeft += 100;
            }
        }, { passive: true });
    } else {
        console.error('main not found');
    }
});


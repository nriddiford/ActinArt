// fitty('.fit');
fitty('#fit1');

// fitty('#fit2');
// fitty('#fit3');


fitty('#my_fit', {
    minSize: 12,
    maxSize: 300
});


function myFunction(x) {
    if (x.matches) { // If media query matches
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "pink";
    }
}

var x_2 = window.matchMedia("(max-width: 960px)")
myFunction(x_2) // Call listener function at run time
x_2.addListener(myFunction) // Attach listener function on state changes
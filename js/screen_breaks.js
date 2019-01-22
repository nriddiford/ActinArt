// Get screen width
// get element to update
// var header_two = document.getElementById('headtext');
// Update element with screen width
var header_one = document.getElementById('headtext');
var header_two = document.getElementById('headtext2');
var header_three = document.getElementById('headtext3');


function bootstrapBreakpoints(){
    var wwidth = window.innerWidth;

    var small = 544
    var medium = 768
    var large = 992
    var xlarge = 1200


    if (wwidth < small) {
        named_size = ' xsmall';
    }
    else if (wwidth >= small && wwidth < medium) {
        named_size = ' small';
    }
    else if (wwidth >= medium && wwidth < large) {
        named_size = ' medium';
    }
    else if (wwidth >= large && wwidth < xlarge) {
        named_size = ' large';
    }
    else if (wwidth >= xlarge) {
        named_size = ' xlarge';
    }
    header_one.textContent = "Screen width: " + wwidth
    header_two.textContent = "Screen width break: " + named_size
}


window.addEventListener('resize', bootstrapBreakpoints);

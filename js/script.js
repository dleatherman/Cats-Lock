/* Author:  Dan Leatherman

*/

function slabTextHeadlines() {
        $('h1').slabText();
}

$(window).load(function() {
        setTimeout(slabTextHeadlines, 1000);
});
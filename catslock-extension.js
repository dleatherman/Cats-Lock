if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too
   script = document.createElement( 'script' );
   script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
   script.onload=catslock;
   document.body.appendChild(script);
}
else {
   catslock();
}

$(document).ajaxComplete(catslock);

function catslock() {

   var imgs = document.getElementsByTagName('img');

   for (var i = 0; i < imgs.length; i++) {
      var h = imgs[i].height, w = imgs[i].width;

      imgs[i].src = 'http://placekitten.com/' + w + '/' + h;

   }

}

function doc_keyUp(e) {

    // this would test for whichever key is 40 and the ctrl key at the same time
    if (e.capslockKey) {
        // call your function to do the thing
        catslock();
    }
}
// register the handler 
document.addEventListener('keyup', doc_keyUp, false);
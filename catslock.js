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

      // determine if img has been cats-locked or not
      if (imgs[i].className=='cats-locked') {

      } else {

        // grab width and height to use later for img src
        var h = imgs[i].height, w = imgs[i].width;

        // change img src to placekitten image with same width and height
        imgs[i].src = 'http://placekitten.com/' + w + '/' + h;

        // add class to skip next time the function is run
        imgs[i].className = 'cats-locked';
      }

   }
   
   if (
      document.getElementById &&
	   document.createTreeWalker &&
	   typeof NodeFilter!="undefined"
   ) {
      var walker = document.createTreeWalker(
	      document.body,
	      NodeFilter.SHOW_TEXT,
	      null,
      	false
      ),
      node;

      while (node=walker.nextNode())
	      node.nodeValue = node.nodeValue.replace(/dog/ig, 'cat');

   }

}
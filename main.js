
var req = new XMLHttpRequest();
req.addEventListener('load', function () {
  document.querySelector('#posting').innerHTML = req.responseText;
  var listings = document.querySelectorAll('#posting section');
  listings[Math.random() * listings.length | 0].classList.add('selected');
});
req.overrideMimeType('text/text');
req.open('get', 'jobs.html');
req.send();
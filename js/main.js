'use strict';

let elem = document.createElement('button');
(function(){
    elem.className = "btn_up1";
    elem.innerText = " ";
    document.body.appendChild(elem);
})();

elem.onclick = function() {
    window.scrollTo(this.scrollX, 0);
    };

    window.addEventListener('scroll', function() {
      btn_up1.hidden = (this.scrollY < document.documentElement.clientHeight);
    });


$('.add').click(() => {
    $('p.text_hide').toggle('slow', function () {
        $('<h3>Some Title Block</h3>')
    });
})

$('.add').click(() => {
    $('.galery__add').toggle('slow', function () {
        $('<h3>Some Title Block</h3>')
    });
})




import "../css/pages/index.css";
const box = document.querySelector('.card__text'),
    text = box.innerHTML,
    clone = document.createElement('div');

clone.style.position = 'absolute';
clone.style.visibility = 'hidden';
clone.style.width = box.clientWidth + 'px';
clone.innerHTML = text;
document.body.appendChild(clone);

var l = text.length - 1;
for (; l >= 0 && clone.clientHeight > box.clientHeight; --l) {
    clone.innerHTML = text.substring(0, l) + '...';
}

box.innerHTML = clone.innerHTML;
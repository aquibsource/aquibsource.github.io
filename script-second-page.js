
var boxes = document.getElementsByClassName('box');

// Assign event listeners to each element
for (var i = 0; i < boxes.length; i++) {
    boxes[i].onclick = colorchange;
}

function colorchange() {
    // 'this' refers to the clicked element
    this.style.backgroundColor = 'green';
}

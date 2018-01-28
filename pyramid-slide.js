var formElem = document.getElementById("draw-form");
var slider = document.getElementById("myRange");
function outputUpdate(hgt) {
	document.querySelector('#Height').value = hgt;
}
formElem.oninput = function(event) {
    event.preventDefault();
    heightStr = slider.value;
    height = parseInt(heightStr);
    // draw pyramid with the specified height
    drawPyramid(height);
}

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";
    var rowStrChar = document.getElementById("myChar").value;

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            //rowStr += "#";
            rowStr += rowStrChar;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
 
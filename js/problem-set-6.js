/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  var hello = document.getElementById('canvas1').getContext('2d')
  hello.clearRect(0,0,1024,512);
  hello.font = '48px sans-serif';
  hello.strokeText('Hello, World!', 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  let canvas = document.getElementById('canvas2');
  var draw = canvas.getContext('2d');
  draw.clearRect(0, 0, canvas.width, canvas.height);
  width= Number(prompt('Please enter a positive width greater than 1'));
  height= Number(prompt('Please enter a positive height greater than 1'));
  x= Number(prompt('please enter an x position'));
  y= Number(prompt('Please enter a y position'));
  if (isNaN(height) == true || isNaN(width) == true || isNaN(x) == true || isNaN(y) == true) {
    alert("One of your inputs is not a number.");
  } else if (height < 1) {
    alert("Your height is too small.");
  } else if (width < 1) {
    alert("Your width is too small.");
  } else if (x < 5) {
    alert("Your x-coordinate is too small.");
  } else if (y < 5) {
    alert("Your y-coordinate is too small.");
  } else if (x + width >= 1024 || y + height >= 512) {
    alert("The rectangle will not fit on the canvas.");
  } else {
    draw.strokeRect(x, y, width, height);
  }
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {

  let color = prompt('please enter valid color');
  let rectangle = document.getElementById('canvas3');
  if (rectangle.getContext){
  let drawing = rectangle.getContext("2d");
  drawing.clearRect(0,0,1024,512);
  drawing.fillStyle = color;
  drawing.fillRect(10, 10, 100, 50);
  }
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  var a = Number(prompt('Please enter side length'));
  var b = Number(prompt('Please enter side length'));
  var c = Number(prompt('Please enter side length'));
  let hypotenuse = Math.max(a, b, c);
  let left = Math.min(a, b, c);
  let bottom = a+b+c-hypotenuse-left;
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('This is not a valid triangle')
  }
  else if (left**2 + bottom**2 != hypotenuse**2) {
    alert('This is not a valid right triangle');
  }
  else if (bottom>1024 || left>512) {
    alert('This is not a valid right triangle');
  }
  else{
  let triangle = document.getElementById('canvas4');
  if (canvas4.getContext) {
  var drawing = canvas4.getContext('2d');
  drawing.clearRect(0,0,1024,512);
  drawing.beginPath();
  drawing.moveTo(10, 10);
  drawing.lineTo(10, 10+left);
  drawing.lineTo(10+bottom, 10+left);
  drawing.lineTo(10,10);
  drawing.stroke()
    }
  }
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let smiley = document.getElementById("canvas5").getContext("2d");
  smiley.clearRect(0,0,1024,512);
  let r ;
  do {
    r = Number(prompt("Please enter a radius"));
  } while (isNaN(r) || r<1 || r>250.5);
  smiley.beginPath();
  smiley.arc(r + 10, r + 10, r, 0 * Math.PI, 2 * Math.PI);
  smiley.moveTo(1.7 * r + 10, r + 10);
  smiley.arc(r + 10, r + 10, 0.7 * r, 0 * Math.PI, Math.PI);
  smiley.moveTo(0.8 * r + 10, 0.7 * r + 10);
  smiley.arc(0.7 * r + 10, 0.7 * r + 10, 0.1 * r, 0 * Math.PI, 2 * Math.PI);
  smiley.moveTo(1.4 * r + 10, 0.7 * r + 10);
  smiley.arc(1.3 * r + 10, 0.7 * r + 10, 0.1 * r, 0 * Math.PI, 2 * Math.PI);
  smiley.closePath();
  smiley.stroke();
  lineWidth = 1;
    }

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  let outerRadius = prompt("Outer Radius:");
  let innerRadius = prompt("Inner Radius:");
  let canvas = document.getElementById('canvas6');
  var star = canvas.getContext('2d');
  star.clearRect(0, 0, canvas.width, canvas.height);
  outerRadius = Number(outerRadius);
  innerRadius = Number(innerRadius);
  if (isNaN(outerRadius) == true || isNaN(innerRadius) == true) {
    alert("One of your inputs is not a number.");
  } else if (outerRadius < 2) {
    alert("Your outer radius is too small.");
  } else if (innerRadius < 1) {
    alert("Your inner radius is too small.");
  } else if (outerRadius <= innerRadius) {
    alert("Your outer radius must be larger than your inner radius.")
  } else {
    star.beginPath();
    star.moveTo(125, 125 - outerRadius);
    let x = 0;
    let angle = 0 * Math.PI;
    while (x < 5) {
      star.lineTo(Math.cos(1.3 * Math.PI - angle) * innerRadius + 125, Math.sin(1.3 * Math.PI - angle) * innerRadius + 125);
      star.lineTo(Math.cos(1.1 * Math.PI - angle) * outerRadius + 125, Math.sin(1.1 * Math.PI - angle) * outerRadius + 125);
      angle = angle + 0.4 * Math.PI;
      x = x + 1;
    }
    star.closePath();
    star.stroke();
    lineWidth = 1;
  }
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let r = 40 / Math.sin(0.125 * Math.PI);
  let canvas = document.getElementById('canvas7');
  var stop = canvas.getContext('2d');
  stop.clearRect(0, 0, canvas.width, canvas.height);
  stop.beginPath();
  stop.moveTo(Math.cos(0.125 * Math.PI) * r + 110, Math.sin(0.125 * Math.PI) * r + 110);
  let x = 0;
  let angle = 0.25 * Math.PI;
  while (x < 8) {
    stop.lineTo(Math.cos(0.125 * Math.PI + angle) * r + 110, Math.sin(0.125 * Math.PI + angle) * r + 110);
    angle = angle + 0.25 * Math.PI;
    x = x + 1;
  }
  stop.closePath();
  stop.fillStyle = "red";
  stop.fill();
  stop.font = "65px Arial";
  stop.fillStyle = "white";
  stop.fillText("STOP", 22, 130);
  lineWidth = 1;
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  let length = prompt("Length:");
  length = Number(length);
  let canvas = document.getElementById('canvas8');
  var pyramid = canvas.getContext('2d');
  pyramid.clearRect(0, 0, canvas.width, canvas.height);

  if (isNaN(length) == true) {
      alert("Your input is not a number.");
  } else if (length > 100.2) {
      alert("The pyramid will not fit on the canvas.");
  } else {
      pyramid.beginPath();
      let x = 0;
      let limit = 5;
      let xOffset = 0;
      let yOffset = 0;
      let y = 0;
      let initialOffset = 0;
      while (y < 5) {
        while (x < limit) {
          pyramid.strokeRect(10 + xOffset + initialOffset, canvas.height - 10 - length - yOffset, length, length);
          xOffset = xOffset + length;
          x++;
        }
        y++;
        x = 0;
        xOffset = 0;
        yOffset += length;
        limit -= 1;
        initialOffset += (length / 2);
      }
  }
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let houseColor = prompt("House Color:");
  let doorColor = prompt("Front Door Color:");
  let canvas = document.getElementById('canvas9');
  const house = canvas.getContext('2d');
  house.clearRect(0, 0, canvas.width, canvas.height);

  let colorOutput = document.getElementById('canvas3').getContext('2d');
  if (houseColor != "brown" && houseColor != "blue" && houseColor != "green" && houseColor != "orange" && houseColor != "purple" && houseColor != "red" && houseColor != "yellow") {
    alert("One of your colors is not supported.");
  } else if (doorColor != "brown" && doorColor != "blue" && doorColor != "green" && doorColor != "orange" && doorColor != "purple" && doorColor != "red" && doorColor != "yellow") {
    alert("One of your colors is not supported.");
  } else {
    house.beginPath();
    house.fillStyle = houseColor;
    house.fillRect(150, canvas.height / 3, canvas.width - 300, 2 * canvas.height / 3 - 10);
    house.strokeRect(150, canvas.height / 3, canvas.width - 300, 2 * canvas.height / 3 - 10);
    house.closePath();
    lineWidth = 4;

    house.beginPath();
    house.moveTo(150, canvas.height / 3);
    house.lineTo(canvas.width / 2, 10);
    house.lineTo(canvas.width - 150, canvas.height / 3);
    house.closePath();
    house.fillStyle = "gray";
    house.fill();
    house.stroke();
    lineWidth = 4;

    house.beginPath();
    house.fillStyle = "LightBlue";
    house.fillRect(275, canvas.height / 3 + 75, 75, 75);
    house.strokeRect(275, canvas.height / 3 + 75, 75, 75);
    house.closePath();
    lineWidth = 4;
    
    house.beginPath();
    house.fillStyle = "LightBlue";
    house.fillRect(275, canvas.height - 125, 75, 75);
    house.strokeRect(275, canvas.height - 125, 75, 75);
    house.closePath();
    lineWidth = 4;

    house.beginPath();
    house.fillStyle = "LightBlue";
    house.fillRect(canvas.width - 350, canvas.height - 125, 75, 75);
    house.strokeRect(canvas.width - 350, canvas.height - 125, 75, 75);
    house.closePath();
    lineWidth = 4;
    
    house.beginPath();
    house.fillStyle = "LightBlue";
    house.fillRect(canvas.width - 350, canvas.height / 3 + 75, 75, 75);
    house.strokeRect(canvas.width - 350, canvas.height / 3 + 75, 75, 75);
    house.closePath();
    lineWidth = 4;
    
    house.beginPath();
    house.fillStyle = doorColor;
    house.fillRect(canvas.width / 2 - 50, canvas.height - 160, 100, 150);
    house.strokeRect(canvas.width / 2 - 50, canvas.height - 160, 100, 150);
    house.closePath();
    lineWidth = 4;
    
    house.beginPath();
    house.fillStyle = "yellow";
    house.arc(canvas.width / 2 + 40, canvas.height - 85, 7, 0 * Math.PI, 2 * Math.PI);
    house.fill();
    house.stroke();
    lineWidth = 4;
  }

}

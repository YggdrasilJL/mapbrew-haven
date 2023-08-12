var canvas = document.querySelector('canvas');
var tilesetContainer = document.querySelector('.tileset-container');
var tilesetSelection = document.querySelector('.tileset-container_selection');
var tilesetImage = document.querySelector('#tileset-source');

var selection = [0, 0]; //Which tile we will paint from the menu

var isMouseDown = false;
var currentLayer = 0;
var layers = [
  //Bottom
  {
    //Structure is "x-y": ["tileset_x", "tileset_y"]
    //EXAMPLE: "1-1": [3, 4],
  },
  //Middle
  {},
  //Top
  {},
];

//Select tile from the Tiles grid
tilesetContainer.addEventListener('mousedown', (event) => {
  selection = getCoords(event);
  tilesetSelection.style.left = selection[0] * 64 + 'px';
  tilesetSelection.style.top = selection[1] * 64 + 'px';
});

//Handler for placing new tiles on the map
function addTile(mouseEvent) {
  var clicked = getCoords(event);
  var key = clicked[0] + '-' + clicked[1];

  if (mouseEvent.shiftKey) {
    delete layers[currentLayer][key];
  } else {
    layers[currentLayer][key] = [selection[0], selection[1]];
  }
  draw();
}

//Bind mouse events for painting (or removing) tiles on click/drag
canvas.addEventListener('mousedown', () => {
  isMouseDown = true;
});
canvas.addEventListener('mouseup', () => {
  isMouseDown = false;
});
canvas.addEventListener('mouseleave', () => {
  isMouseDown = false;
});
canvas.addEventListener('mousedown', addTile);
canvas.addEventListener('mousemove', (event) => {
  if (isMouseDown) {
    addTile(event);
  }
});

//Utility for getting coordinates of mouse click
function getCoords(e) {
  const { x, y } = e.target.getBoundingClientRect();
  const mouseX = e.clientX - x;
  const mouseY = e.clientY - y;
  return [Math.floor(mouseX / 64), Math.floor(mouseY / 64)];
}

//converts data to image:data string and pipes into new browser tab
function exportImage() {
  var data = canvas.toDataURL();
  var image = new Image();
  image.src = data;

  var w = window.open('');
  w.document.write(image.outerHTML);
}

//Reset state to empty
function clearCanvas() {
  layers = [{}, {}, {}];
  draw();
}

function setLayer(newLayer) {
  //Update the layer
  currentLayer = newLayer;

  //Update the UI to show updated layer
  var oldActiveLayer = document.querySelector('.layer.active');
  if (oldActiveLayer) {
    oldActiveLayer.classList.remove('active');
  }
  document
    .querySelector(`[tile-layer="${currentLayer}"]`)
    .classList.add('active');
}

function draw() {
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var size_of_crop = 64;

  layers.forEach((layer) => {
    Object.keys(layer).forEach((key) => {
      //Determine x/y position of this placement from key ("3-4" -> x=3, y=4)
      var positionX = Number(key.split('-')[0]);
      var positionY = Number(key.split('-')[1]);
      var [tilesheetX, tilesheetY] = layer[key];

      ctx.drawImage(
        tilesetImage,
        tilesheetX * 64,
        tilesheetY * 64,
        size_of_crop,
        size_of_crop,
        positionX * 64,
        positionY * 64,
        size_of_crop,
        size_of_crop
      );
    });
  });
}

tilesetImage.onload = function () {
  layers = defaultState;
  draw();
  setLayer(0);
};
tilesetImage.src = '../assets/images/tilesheet3.png';

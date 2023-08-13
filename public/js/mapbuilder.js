const canvas = document.querySelector('canvas');
const tilesetContainer = document.querySelector('.tileset-container');
const tilesetSelection = document.querySelector('.tileset-container_selection');
const tilesetImage = document.querySelector('#tileset-source');

let selection = [0, 0]; //Which tile we will paint from the menu

let isMouseDown = false;
let currentLayer = 0;
let layers = [
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
  let clicked = getCoords(mouseEvent);
  let key = clicked[0] + '-' + clicked[1];

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

//converts data to url and allows user to download
function exportImage() {
  const canvas = document.querySelector('canvas');
  const data = canvas.toDataURL();
  const download = document.createElement('a');
  download.href = data;
  download.download = 'custom-map.png';
  download.click();
}
// if the canvas is empty it will
document.querySelector('.primary-button').addEventListener('click', () => {
  let isEmpty = isCanvasEmpty(canvas);
  if (!isEmpty) {
    exportImage();
    setTimeout(() => {
      displayPopUp('Map exported!', 'success');
    }, 1000);
  } else {
    displayPopUp('Cannot export empty canvas', 'danger');
    return;
  }
});

// checks if the content of the canvas is empty or not
function isCanvasEmpty(canvas) {
  const canvasContext = canvas.getContext('2d');
  const imageData = canvasContext.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  ).data;

  for (let i = 0; i < imageData.length; i += 4) {
    if (imageData[i + 3] !== 0) {
      return false;
    }
  }
  return true;
}
//Reset state to empty
function clearCanvas() {
  layers = [{}, {}, {}];
  draw();
}

function displayPopUp(message, type) {
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
  alertPlaceholder.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="fade alert alert-${type}" role="alert">`,
    `   <div>${message}</div>`,
    '</div>',
  ].join('');

  const alertElement = wrapper.firstChild;
  alertElement.classList.add('show');
  alertPlaceholder.appendChild(wrapper);

  setTimeout(() => {
    wrapper.remove();
  }, 2500);
}

function setLayer(newLayer) {
  //Update the layer
  currentLayer = newLayer;

  //Update the UI to show updated layer
  let oldActiveLayer = document.querySelector('.layer.active');
  if (oldActiveLayer) {
    oldActiveLayer.classList.remove('active');
  }
  document
    .querySelector(`[tile-layer="${currentLayer}"]`)
    .classList.add('active');
}

function draw() {
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let size_of_crop = 64;

  layers.forEach((layer) => {
    Object.keys(layer).forEach((key) => {
      //Determine x/y position of this placement from key ("3-4" -> x=3, y=4)
      let positionX = Number(key.split('-')[0]);
      let positionY = Number(key.split('-')[1]);
      let [tilesheetX, tilesheetY] = layer[key];

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
  layers;
  draw();
  setLayer(0);
};
tilesetImage.src = '../assets/images/tilesheet3.png';

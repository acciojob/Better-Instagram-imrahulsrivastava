const images = document.querySelectorAll(".image");

let id = 1;
let draggingElement = null;

images.forEach((e) => {
  e.id = `div${id++}`;
  e.addEventListener("dragstart", onDragStart);
  e.addEventListener("dragover", onDragOver);
  e.addEventListener("drop", onDrop);
});

function onDragStart(event) {
  console.log("Dragging Start");
  draggingElement = event.currentTarget;
}

function onDragOver(event) {
  console.log("Dragging Over");
  if (draggingElement.parentNode.id === event.currentTarget.id) {
    return;
  }
  event.preventDefault();
}

function onDrop(event) {
  const id = event.currentTarget.id;
  const bgImg = event.currentTarget.style.backgroundImage;
  const text = event.currentTarget.innerText;

  event.currentTarget.id = draggingElement.id;
  event.currentTarget.style.backgroundImage =
    draggingElement.style.backgroundImage;
  event.currentTarget.innerText = draggingElement.innerText;

  draggingElement.id = id;
  draggingElement.style.backgroundImage = bgImg;
  draggingElement.innerText = text;
}

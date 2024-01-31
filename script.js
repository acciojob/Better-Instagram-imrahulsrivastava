let id = 1;
let draggingElement = null;

const images = document.querySelectorAll(".image");
images.forEach((e) => {
  e.id = `drag${id++}`;
  e.addEventListener("dragstart", onDragStart);
  e.addEventListener("dragover", onDragOver);
  e.addEventListener("drop", onDrop);
});

function onDragStart(event) {
  draggingElement = event.currentTarget;
}

function onDragOver(event) {
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
  draggingElement = null;
}

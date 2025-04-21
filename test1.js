let car = document.querySelector("#car");
let carVisible = true;
let x = window.innerHeight / 2;
let y = window.innerWidth / 2;

function move(direction) {
  const step = 50;

  switch (direction) {
    case 'up':
      x -= step;
      break;
    case 'down':
      x += step;
      break;
    case 'left':
      y -= step;
      break;
    case 'right':
      y += step;
      break;
  }

  x = Math.max(0, Math.min(window.innerHeight - 30, x));
  y = Math.max(0, Math.min(window.innerWidth - 50, y));

  if (carVisible && car) {
    car.style.top = `${x}px`;
    car.style.left = `${y}px`;
  }
}

document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "ArrowUp":
      move("up");
      break;
    case "ArrowDown":
      move("down");
      break;
    case "ArrowLeft":
      move("left");
      break;
    case "ArrowRight":
      move("right");
      break;
    case "Delete":
      if (carVisible && car && car.parentNode) {
        car.parentNode.removeChild(car);
        carVisible = false;
      }
      break;
    case "Insert":
      if (!carVisible) {
        car = document.createElement("img");
        car.src = "car.png";
        car.className = "car";
        car.id = "car";
        car.style.position = "absolute";
        car.style.width = "50px";
        car.style.height = "50px";
        car.style.top = `${x}px`;
        car.style.left = `${y}px`;
        document.body.appendChild(car);
        carVisible = true;
      }
      break;
  }
});

document.addEventListener("dblclick", function (event) {
  x = event.clientY;
  y = event.clientX;

  if (carVisible && car) {
    car.style.top = `${x}px`;
    car.style.left = `${y}px`;
  }
});

window.addEventListener("resize", () => {
  x = Math.min(x, window.innerHeight - 30);
  y = Math.min(y, window.innerWidth - 50);
});

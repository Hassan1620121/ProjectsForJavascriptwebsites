score = 0;
cross = true;

let audio = new Audio('music.mp3');
let audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play();
}, 1000);


document.onkeydown = function (e) {
  console.log("the code is: ", e.code);
  if (e.code == "ArrowUp") {
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 700);
  }

  if (e.code == "ArrowRight") {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 112 + "px";
  }
  if (e.code == "ArrowLeft") {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX - 112 + "px";
  }
};

setInterval(() => {
  dino = document.querySelector(".dino");
  gameOver = document.querySelector(".gameOver");
  obstacle = document.querySelector(".obstacle");

  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  // console.log(offsetX,offsetY);
  if ((offsetX < 100) & (offsetY < 50)) {
    gameOver.innerHTML = "Game Over - Reload to Start Over";
    obstacle.classList.remove("obstacleAni");
    audiogo.play();
    setTimeout(() => {
        audiogo.pause();
        audio.pause();
    }, 500);
  } else if (offsetX < 40 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      aniDur = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );
      newDur = aniDur - 0.1;
      obstacle.style.animationDuration = newDur + "s";
      console.log('New Animation Duration: ', newDur)
    }, 500);
  }
}, 10);
function updateScore(score) {
  scoreCount.innerHTML = "Your Score" + score;
}

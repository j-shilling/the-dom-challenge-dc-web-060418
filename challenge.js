document.addEventListener("DOMContentLoaded", setUpEventListeners);

let countedLikes = {}

let paused = false;

function setUpEventListeners() {
    setInterval(incrementCounter, 1000);
    document.getElementById("-").addEventListener('click', decrementCounter)
    document.getElementById("+").addEventListener('click', incrementCounter)
    document.getElementById("<3").addEventListener('click', addLike)
    document.getElementById("pause").addEventListener('click', togglePause)

}




let incrementCounter = function() {
  let counter = document.querySelector('#counter')

  let count = parseInt(counter.innerText)
  if (!paused) {
    count++;
    counter.innerText = count;
  }
}

let decrementCounter = function() {
  let counter = document.querySelector('#counter')
  let count = parseInt(counter.innerText)
  if (!paused) {
    count--;
    counter.innerText = count;
  }
}

let addLike = function() {
  if (paused) {return;}
  let likes = document.getElementsByClassName("likes");
  let counter = document.querySelector('#counter').innerText;

  if (countedLikes[counter]) {
    countedLikes[counter] += 1;
    let existingLike = document.querySelector(`#like-${counter}`)
    existingLike.innerText = `${counter} was liked ${countedLikes[counter]} times.`
  } else {
    countedLikes[counter] = 1
    let newLike = document.createElement('li');
    newLike.id = `like-${counter}`
    newLike.innerText = `${counter} was liked 1 time.`;
    likes[0].appendChild(newLike);
  }
}

let togglePause = function(e) {
  paused = !paused
  button = e.target;
  buttonText = paused ? "resume" : "pause"
  button.innerText = buttonText;
}

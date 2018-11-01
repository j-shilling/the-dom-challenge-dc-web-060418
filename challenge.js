let interval = null;

function incrementTimer() {
  let counter = document.getElementById('counter');
  if (counter) {
    counter.innerHTML ++;
  }
}

function decrementTimer() {
  let counter = document.getElementById('counter');
  if (counter) {
    counter.innerHTML --;
  }
}

function likeTime() {
  let counter = document.getElementById('counter');
  if (!counter)
    return;

  let time = counter.innerHTML;
  let likes = document.getElementsByClassName('likes')[0];
  if (!counter)
    return;

  let elm = document.getElementById(time);
  if (!elm) {
    elm = document.createElement("li");
    elm.id = time;
    elm.dataset.likes = 1;
    likes.appendChild(elm);
  } else {
    elm.dataset.likes ++;
  }
  elm.innerHTML = `${time} liked ${elm.dataset.likes} times`;
}

function startTimer() {
  interval = setInterval(incrementTimer, 1000);
  let btn = document.getElementById('pause');
  if (btn) {
    btn.innerHTML = 'pause';
    btn.onclick = stopTimer;
  }
}

function stopTimer() {
  clearInterval(interval);
  let btn = document.getElementById('pause');
  if (btn) {
    btn.innerHTML = 'resume';
    btn.onclick = startTimer;
  }
}

function addComment(event) {
  event.preventDefault();

  let list = document.getElementById('list');
  if (!list)
    return;

  let input = event.target.getElementsByTagName('input')[0];
  if (!input)
    return;

  let text = input.value;
  input.value = "";
  let elm = document.createElement("p");
  elm.innerHTML = text;
  list.appendChild(elm);
}

document.addEventListener("DOMContentLoaded", function(event) {
  startTimer();

  let elm = document.getElementById('+');
  if (elm)
    elm.onclick = incrementTimer;
  elm = document.getElementById('-');

  if (elm)
    elm.onclick = decrementTimer;

  elm = document.getElementById('<3');
  if (elm)
    elm.onclick = likeTime;

  elm = document.getElementById('comment-form');
  if (elm)
    elm.onsubmit = addComment;
});

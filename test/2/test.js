
// formula     http://easings.net/
// description https://stackoverflow.com/questions/8316882/what-is-an-easing-function
// x: percent
// t: current time,
// b: beginning value,
// c: change in value,
// d: duration
function easeInOutQuad(x, t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b;
    } else {
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
}

function move() {
    //position += increment;
    time += 1 / fps;
    position = easeInOutQuad(time * 100 / duration, time, start, finish, duration);

    if (position >= finish) {
        clearInterval(handler);
        box.style.left = finish + "px";
        return;
    }
    box.style.left = position + "px";
}

let box = document.getElementById("root"),
    fps = 60,
    duration = 2, // seconds
    start = 0, // pixel
    finish = window.innerWidth,
    distance = finish - start,
    increment = distance / (duration * fps),
    position = start,
    time = 0,
    handler = setInterval(move, 1000 / fps);




move()



















// https://kodhus.com/easings/
// t: current time/currnet step
// b: starting position
// c: amount of change (end - start)
// d: total animation time/steps

function easeOutCubic(t, b, c, d) {
  return c*((t=t/d-1)*t*t + 1) + b;
}

function easeOutQuint(t, b, c, d) {
  return c*((t=t/d-1)*t*t*t*t + 1) + b;
}

function easeOutElastic(t, b, c, d) {
  var s=1.70158;var p=0;var a=c;
  if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
  if (a < Math.abs(c)) { a=c; var s=p/4; }
  else var s = p/(2*Math.PI) * Math.asin (c/a);
  return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
}

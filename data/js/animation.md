## Animation
```js
var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame ||
                           window.mozCancelAnimationFrame;

var myReq;

function animate_me(timestamp) {
  d.style.left = Math.min(progress / 10, 200) + 'px';
  if (progress < 2000) {
    myReq = requestAnimationFrame(animate_me);
  }
}
myReq = requestAnimationFrame(animate_me);

cancelAnimationFrame(myReq);
```



```js
// https://kodhus.com/easings/
let animation_request = false
function animate_me(obj) {
  if(!animation_request) {

    let step_current = 0, height_start = 0, close_it = false
    const step_total = 50, height_end = 190
    let step_style = 'easeOutElastic'

    if(parseInt(obj.style.height) >= height_end ) {
      step_current = step_total
      close_it = true
      step_style = 'easeInCirc'
    }
  	function animation_frame_func() {
      // console.log(step_current);
      console.log(obj.style.height);
      obj.style.height = animate_styles[step_style](
                            step_current,
                            height_start,
                            height_end,
                            step_total
                          ) + 'px'
      step_current = close_it == true ? step_current - 1 : step_current + 1
  		if(step_current <= 0 || step_total <= step_current) {
        animation_request = false
        return false
  		}
      animation_request = requestAnimationFrame(animation_frame_func)
  	}
    animation_request = requestAnimationFrame(animation_frame_func)
  }
}

const animate_styles = {
  easeOutElastic : function(t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  easeOutQuint: function(t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  },
  easeInCirc: function(t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  }
}
```

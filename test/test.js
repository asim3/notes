
// https://kodhus.com/easings/
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

let animation_request = false
function animate_me(obj) {
  if(!animation_request) {

    const height_start = 0, height_end = 190
    let step_current = 0, step_total = 50, close_it = false
    let step_style = 'easeOutElastic'

    if(parseInt(obj.style.height) >= height_end ) {
      step_total = 30
      step_current = step_total
      close_it = true
      step_style = 'easeInCirc'
    }
  	function animation_frame_func() {
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


function add_all_events(obj, func) {
  obj.addEventListener('click', () => func(obj))
  // obj.addEventListener('blur', () => func(obj))
  // obj.addEventListener('focus', () => func(obj))
  // obj.addEventListener('change', () => func(obj))
  // obj.addEventListener('input', () => func(obj))
  // obj.addEventListener('dblclick', () => func(obj))
  //
  // obj.addEventListener('mousedown', () => func(obj))
  // obj.addEventListener('mouseenter', () => func(obj))
  // obj.addEventListener('mouseleave', () => func(obj))
  // obj.addEventListener('mousemove', () => func(obj))
  // obj.addEventListener('mouseover', () => func(obj))
  // obj.addEventListener('mouseout', () => func(obj))
  // obj.addEventListener('mouseup', () => func(obj))
  //
  // obj.addEventListener('touchcancel', () => func(obj))
  // obj.addEventListener('touchend', () => func(obj))
  // obj.addEventListener('touchmove', () => func(obj))
  // obj.addEventListener('touchstart', () => func(obj))
  //
  // obj.addEventListener('transitionend', () => func(obj))
  //
  // obj.addEventListener('keydown', () => func(obj))
  // obj.addEventListener('keypress', () => func(obj))
  // obj.addEventListener('keyup', () => func(obj))

  console.log(`function ${func.name} was added`)
}

window.onload = function() {
  [...document.querySelectorAll('#root')].map(obj => add_all_events(obj, animate_me))
}

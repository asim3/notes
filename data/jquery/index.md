## load
```js
window.addEventListener('load', function (event) {
    console.log(123)
})
```

## value
```js
$('#value').val()
```


## CSS
```js
$("#value").show()
$("#value").hide()
$("#value").toggle()

$("#" + id).addClass("active")
$("#" + id).removeClass("active")
$("#" + id).toggleClass("active")

$("h1, h2, p").removeClass("blue")

$("p").css("background-color", "yellow")
$("p").css({"background-color": "yellow", "font-size": "200%"})
```


## effects
```js
$("#div1").fadeIn()
$("#div2").fadeOut()
$("#div2").fadeToggle()
$("#div2").fadeTo("slow", 0.15)


$("#div1").slideDown()
$("#div1").slideUp()
$("#div1").slideToggle()
```

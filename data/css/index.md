[Animate On Scroll Library](https://michalsnik.github.io/aos/)


## No Select
```css
html { font-size: 17px;}

@media (max-width: 900px) { html { font-size: 15px; } }

@media (max-width: 400px) { html { font-size: 13px; } }

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.5rem;
}

h3 {
  font-size: 2rem;
}
```


No Select
```css
.no_select
{
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
```

Centered
```css
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.centered {
  display: grid;
  justify-content: space-evenly;
}
```



Background Centered
```css
.background_center {
    width: 30%;
    height: 100px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
}
```


## svg viewBox
```xml
<svg fill="currentColor" viewBox="0 0 300 300" height="210" width="500" xmlns="http://www.w3.org/2000/svg">
    <polygon points="200,10 250,190 160,210" 
        style="fill:lime;stroke:purple;stroke-width:1"></polygon>
</svg>
```

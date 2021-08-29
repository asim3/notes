## CSS
`css/wagtail_admin.css`
```css
:root {
    --color-primary-hue:333;
    --color-primary-saturation:100%;
    --color-primary-lightness:24%;
}

body {
    font-family: main-font-regular, TimesNewRoman, sans-serif;
}
```

[HSL Color Picker](https://hslpicker.com/)



## OR
```css
body {
    /* font-family: Open Sans,Arial,sans-serif; */
    color: red;
}

.nav-wrapper .inner {
    background: green;
}

.nav-main .menu-active,
.nav-main .nav-footer,
.nav-main .account,
.c-explorer__header,
li.submenu-active {
    background:darkgreen;
}

.nav-submenu {
    background:darkblue;
}

.c-explorer__header {
    color:#fff;
    background-color:darkgreen;
    border-bottom:1px solid darkgreen;
}

.c-explorer {
    background:darkblue;
}

.nav-search input {
    color: #000;
    background-color: #fff;
    border: 1px solid #ccc;
}

.nav-search input:hover {
    color: #000;
    background-color: #aaa;
}

.nav-search input:active, 
.nav-search input:focus {
    color: #000;
    background-color: #aaa;
}

.nav-search button::before {
    color: #000;
}
```

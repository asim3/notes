```sh
mkdir -p static/css static/fonts static/images static/js

mkdir -p dist src/static/css src/static/images src/static/js
```


# HTML
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Web Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../static/css/main.css">
</head>
<body>
    <script src="../static/js/main.js"></script>
</body>
</html>
```


# CSS
```css
/* <link rel="preload" as="font" href="my-font.woff2" type="font/woff2" crossorigin="anonymous">*/
@font-face {
    font-family:'cairo-regular';
    src: local('cairo-regular'),
    local('Cairo-Regular'),
    local('Cairo Regular'),
    url('../fonts/cairo/Cairo-Regular.ttf')
    format('TrueType');
}

@font-face {
    font-family:'cairo-bold';
    src: local('cairo-bold'),
    local('Cairo-Bold'),
    local('Cairo Bold'),
    url('../fonts/cairo/Cairo-Bold.ttf')
    format('TrueType');
}

head, body {
  font-family: cairo-regular, TimesNewRoman, sans-serif;
  width: 100vw;
  position: relative;
  font-size: 1.4rem;
  line-height: 3rem;
  overflow-x: hidden;
}

a {
  color: inherit!important;
  text-decoration: none!important;
}

.regular {
  font-family: cairo-regular, TimesNewRoman, sans-serif;
}

.bold {
  font-family: cairo-bold, TimesNewRoman, sans-serif;
}

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

[خطوط عربية](https://www.fontface.me/)

[الخطوط الاساسية](https://www.cssfontstack.com/)


```css
@font-face {
  font-family: 'MyWebFont';
  src: url('webfont.eot'); /* IE9 Compat Modes */
  src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('webfont.woff2') format('woff2'), /* Super Modern Browsers */
       url('webfont.woff') format('woff'), /* Pretty Modern Browsers */
       url('webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
}
```

**or**
```html
<link rel="stylesheet" type="text/css" href="//www.fontstatic.com/f=sky-bold" />
```

**css**
```css
body {
  font-family: 'sky-bold', Arial, Helvetica, sans-serif;
}
```

adding `js` to html 
``` html
<script src="main.js"></script>
```

adding `css` to html 
```
<link rel="icon" href="demo_icon.gif" type="image/gif" sizes="16x16">
<link rel="stylesheet" type="text/css" href="main.css">

rel description: Required. Specifies the relationship between linked and document
rel values:
    alternate
    author
    dns-prefetch
    help
    icon
    license
    next
    pingback
    preconnect
    prefetch
    preload
    prerender
    prev
    search
    stylesheet
```


```
<a href="tel:+966500"></a>
    tel: – place a phone call
    mailto: – open an email app
    sms: – send a text message
    callto: open Skype
```


### CSS
```
a[href^="mailto:"] { ... }
a[href^="tel:"] { ... }
```

return false will prevent browser from following the link
```
<a href="/home.html" onclick="show_page(this.href);return false;">show</a>
```
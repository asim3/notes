## adding **JS** to html 
```html
<script src="main.js"></script>
```

## adding **CSS** to html 
```html
<link rel="icon" href="demo_icon.gif" type="image/gif" sizes="16x16">
<link rel="stylesheet" type="text/css" href="main.css">
```

> rel: Specifies the relationship between linked and document
```text
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


```html
<a href="tel:+966500"></a>
    tel: – place a phone call
    mailto: – open an email app
    sms: – send a text message
    callto: open Skype
```


## **CSS**
```css
a[href^="mailto:"] { ... }
a[href^="tel:"] { ... }
```

> return false will prevent browser from following the link
```html
<a href="/home.html" onclick="show_page(this.href);return false;">show</a>
```

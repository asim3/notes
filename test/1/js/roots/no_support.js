var no_support_html = "<h1>الرجاء تحديث التطبيق</h1>";
no_support_html += "<h3>يمكنك استخدام احد التطبيقات التالية</h3>";



no_support_html += "<a href='https://www.google.com/chrome/'><img src='https://www.google.com/chrome/static/images/chrome-logo.svg'></a>";
no_support_html += "<a href='https://www.mozilla.org/firefox/new/'><img src='https://upload.wikimedia.org/wikipedia/commons/6/67/Firefox_Logo%2C_2017.svg'></a>";
no_support_html += "<a href='https://support.apple.com/downloads/safari'><img src='https://km.support.apple.com/resources/sites/APPLE/content/live/IMAGES/0/IM26/en_US/safari-120.png'></a>";
no_support_html += "<h1></h1>";
no_support_html += "<h1></h1>";

document.getElementById('item_main').innerHTML = no_support_html;
document.getElementById('block_while_transition').style.display='none';

var no_support_css = document.createElement("link")
no_support_css.rel = "stylesheet"
no_support_css.type = "text/css"
no_support_css.href = STATIC_URL + "css/no_support.css"
document.head.appendChild(no_support_css)

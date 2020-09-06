# schedule a node task
[node-html-parser](https://www.npmjs.com/package/node-html-parser)

## start new project
`nano app.js`
```js
'use strict'
const html_parser = require('node-html-parser');
const getHTML = require('html-get')
 
getHTML('https://google.com').then(function({ url, html, stats, headers}) {
    console.log(`time: ${stats.timing} (${stats.mode})`)

    const document = html_parser.parse(html);
    console.log('innerHTML: ' + document.querySelectorAll('a')[0].innerHTML);
    console.log('href: ' + document.querySelectorAll('a')[0].getAttribute('href'));
    console.log(`url: ${url}`)
})
```


## add packages
```bash
mkdir ~/my-js-app && cd ~/my-js-app
# `-y` : to skip walk through
npm init -y 
npm i node-html-parser html-get browserless
```


## edit crontabs list 
`crontab -e`
```text
* * * * * node ~/my-js-app/app.js >> ~/my-app-results.txt
```
# schedule a node task

[puppeteer](https://github.com/puppeteer/puppeteer/)
[puppeteer-api](https://github.com/puppeteer/puppeteer/blob/v5.2.1/docs/api.md#frameevalselector-pagefunction-args)


## start new project
`nano app.js`
```js
const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://asim3.github.io/1217/");

    await page.waitForSelector("iframe");

    const titles = await page.$$eval("iframe", elements => {
      return elements.map(item => item.src)
    });

    console.log(titles);

    await browser.close();
})();
```


## add packages
```txt
mkdir ~/my-js-app && cd ~/my-js-app
# `-y` : to skip walk through
npm init -y 
npm install puppeteer
```


## edit crontabs list 
`crontab -e`
```text
* * * * * node ~/my-js-app/app.js >> ~/my-app-results.txt
```

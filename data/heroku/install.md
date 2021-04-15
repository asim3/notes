## install
```bash
curl -LO https://cli-assets.heroku.com/heroku-linux-x64.tar.gz \
  && tar -xzf heroku-linux-x64.tar.gz \
  && mkdir -p /usr/local/lib \
  && sudo mv ./heroku /usr/local/lib \
  && sudo ln -s /usr/local/lib/heroku/bin/heroku /usr/local/bin/heroku \
  && heroku version
```

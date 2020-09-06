## Request methods
```js
req.hostname // Host: "example.com:3000" => 'example.com'
req.ip
req.ips // X-Forwarded-For is client, proxy1, proxy2 => ["client", "proxy1", "proxy2"]

req.protocol
req.method

req.originalUrl // http://www.example.com/admin/new?q=1 => '/admin/new?q=1'
req.baseUrl // http://www.example.com/admin/new => '/admin' in MIDDLEWARE: req.originalUrl = req.baseUrl + req.path
req.path // http://www.example.com/admin/new?q=1 => '/new'
req.path // http://www.example.com/admin/new?q=1 => '/new?q=1'

req.params.name // '/user/tj' => 'tj'
req.query.q // '/search?q=tobi+ferret' => 'tobi ferret'

req.secure // req.protocol === 'https'

req.stale // old request
req.fresh // new request

req.subdomains // tobi.ferrets.example.com => ['ferrets', 'tobi']

req.is('html')
req.is('json')
req.is('application/json')
```


## Response methods
```js
res.json() 	Send a JSON response.
res.send() 	Send a response of various types.
res.sendFile() 	Send a file as an octet stream.

res.download() 	Prompt a file to be downloaded.

res.redirect('../login')
res.redirect('http://example.com')
res.redirect(301, 'http://example.com') // Moved Permanently


res.sendStatus() 	Set the response status code and send its string representation as the response body.
res.render() 	Render a view template.
res.end() 	End the response process.
```
## is array
```js
const is_array = function(obj) {
	if(typeof obj == 'object') {
		if(obj.constructor.name == 'Array') {
			return true
		}
	}
	return false
}
```


## AJAX request post
```js
function send_new_post(path, data_obj) {
	return new Promise(function(resolve, reject) {
		const cookie_name = 'ajax_csrf'
	  const csrf_token = getCookie(cookie_name)
	  if(csrf_token) {
		const request = new XMLHttpRequest()
		request.onreadystatechange = function() {
		  if (this.readyState == 4 && this.status !== 200) {
			reject('error:(' + this.status + ')' + this.statusText)
		  }
		  if (this.readyState == 4 && this.status == 200) {
					if(this.response) {
						if(this.response.status == "ready") {
							resolve(this.response)
						}
						else { reject('error: response does not contain status = done')}
					}
					else { reject('error: response is not in JSON syntax')}
		  }
		}
		request.responseType = "json"
		request.open("POST", document.location.origin + '/' + path, true)
		request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
		request.setRequestHeader("X-CSRFToken", csrf_token )
			const encode_data = []
			if(data_obj)	{
				for(name in data_obj) {
				encode_data.push(
						encodeURIComponent(name) + '=' + encodeURIComponent(data_obj[name])
					)
			  }
				const join_encode_data = encode_data.join('&').replace(/%20/g, '+')
				request.send( join_encode_data )
			}
			else { request.send() }
	  }
	  else {
		console.log('no ajax_csrf cookie')
			fetch(document.location.origin + '/' + path)
			  .then(function(response) {
					const csrf_token = getCookie(cookie_name)
				if(csrf_token) {
						send_new_post(path, data_obj)
							.then( (response) => resolve(response) )
							.catch( (error) => { reject(error) })
					}
					else {
						reject('error: no csrf_token cookie! ' + csrf_token)
					}
			  })
	  }
	})
}
```






## AJAX
```js
const post_function = function() {
  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(xhttp.responseText)
      console.log('done')
    }
  }
  xhttp.open("POST", document.location.origin + "/login/", true)
  xhttp.send()
}
```




## Promise
```js
const test = function() {
	return new Promise(x => setTimeout(() => x('done'), 1500) )
}

test().then(x => {console.log(x)})
```


## Promise 
resolve & reject
```js
const test = new Promise(function(resolve, reject) {
	if(1==2) {
		reject()
	}
	else {
		setTimeout(resolve, 1500)
	}
})

test.then(x => {console.log(x)})
```


## Promise all
```js
const arr = [333, 42, 99]

const wait_for = arr.map(number => new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000, number)
}))

Promise.all(wait_for).then(function(values) {
  console.log(values)
})
// expected output: Array [333, 42, 99]
```


## select checkbox
```js
const selected_ids = []
function checkbox_clicked(self, id) {
  selected_ids.map(function(value, index) {
    if(value == id) {
      selected_ids.splice(index, 1)
    }
  })
  if(self.checked) {
    selected_ids.push(id)
  }
  if(selected_ids.length > 0) {
    console.log('full')
  }
  else {
    console.log('null')
  }
}
```


## fullscreen
```js
function toggle_fullscreen() {
  const element = document.getElementById('defaultCanvas0')

  if(document.fullscreenElement) {
    /* Close fullscreen */
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen()
    }
  }
  else {
    /* View in fullscreen */
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.mozRequestFullScreen) { /* Firefox */
        element.mozRequestFullScreen()
      } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        element.webkitRequestFullscreen()
      } else if (element.msRequestFullscreen) { /* IE/Edge */
        element.msRequestFullscreen()
      }
  }
}
```


## fetch as base64
```js
const fetch_as_blob_base64 = url => fetch(url)
		.then(response => response.blob())
		.then(blob => new Promise((resolve, reject) => {
				const reader = new FileReader
				reader.onerror = reject
				reader.onload = () => {
						resolve(reader.result)
				}
				reader.readAsDataURL(blob)
		}))
```


## Download Blob
```js
const svg = document.getElementById(obj.id).contentDocument.querySelector('svg').outerHTML
const blob = new Blob([svg], {type : 'image/svg+xml'})
const objectURL = URL.createObjectURL(blob)
const file_name = 'blob_test_1'
const element = document.createElement('a')
element.setAttribute("href", objectURL)
element.setAttribute("download", file_name + ".svg")
document.body.appendChild(element)
element.click()
element.remove()
```

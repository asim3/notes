## POST using fetch 
```js
let myForm = document.getElementById('myForm');
let formData = new FormData(myForm);

let photo = document.getElementById("image-file").files[0];
formData.append("photo", photo);

var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
var blob = new Blob([content], { type: "text/xml"});
formData.append("webmasterfile", blob);

fetch('/upload/image', {method: "POST", body: formData});
```


## Text to file
```js
const svg = document.getElementById(obj.id).contentDocument
	.querySelector('svg').outerHTML
obj.blob = new Blob([svg], {type : 'image/svg+xml'})
obj.url = URL.createObjectURL(obj.blob)
```


## file reader function
```js
const reader  = new FileReader()
reader.onload = () => func(reader.result)
reader.onloadstart
reader.onloadend
reader.readAsDataURL(file_input)
```


## file reader function
```js
function file_reader(file, func) {
  const reader  = new FileReader()
  reader.onload = () => func(reader.result)
  reader.readAsDataURL(file)
}
```


## Blob & url
```js

const svg = document.getElementById(object_id).contentDocument
	.querySelector('svg').outerHTML
blob = new Blob([svg], {type : 'image/svg+xml'})
obj.url = URL.createObjectURL(blob)
```


## fetch file - download
```js
fetch('', {method: "POST", body: edit_form}).then(response => {
    if(response.status == 200) {
        const content_type = response.headers.get('content-type')
        if(content_type == "application/zip") {
            response.blob().then(blob => {
                const objectURL = URL.createObjectURL(blob)
                const element = document.createElement('a')
                element.setAttribute("href", objectURL)
                element.setAttribute("download", "test_file.zip")
                document.body.appendChild(element)
                element.click()
                element.remove()
            })
        }
        else {
            window.parent.window.location.reload()
        }
    }
    else { console.error('fetch post error')
    }
})
```

## form to json
```js
var form_to_json = function(elements) {
    return [].reduce.call(elements, function(data, elm) {
        var is_valid = false;
        if(elm.name && elm.value) {
            if(elm.type != 'radio' && elm.type != 'checkbox') {
                is_valid = true;
            }
            else { is_valid = elm.checked; }
        }
        if (is_valid) {
            if (elm.type === 'checkbox') {
                data[elm.name] = (data[elm.name] || []).concat(elm.value);
            }
            else if (elm.options && elm.multiple) {
                data[elm.name] = [].reduce.call(elm, function(val, option) {
                    return option.selected ? val.concat(option.value) : val;
                }, []);
            }
            else {
                data[elm.name] = elm.value;
            }
        }
        return data;
    }, {});
};
```




## Run on any form Submit
```js
document.onsubmit = function(event) {
    event.preventDefault();
    event.stopPropagation();
    var elements = event.target.elements;
    var form_data = form_to_json(elements);
    console.log(form_data);
    Controller.fetch(event.target.action, "post", form_data);
};
```

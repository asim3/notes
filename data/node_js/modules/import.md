## import 
> ES modules is experimental
`nano package.json`
```json
{
  // ...
  "type": "module", // to use import * from 'uuid';
}
```


## use
```js
import defaultExport from "module-name";
import * as name from "module-name";

import { export1           } from "module-name";
import { export1 as alias1 } from "module-name";

import { export1 , export2 } from "module-name";
```


```js
import * as my_func from 'uuid';

console.log(my_func.v4())
// '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```


```js
import { v4 as my_func } from 'uuid';

console.log(my_func())
// '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```


```js
import { v4           } from "uuid";

console.log(v4())
```

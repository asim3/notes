## Date
```js
const today = new Date('1995-12-17T03:24:00')
const today = new Date(1995, 11, 17, 3, 24, 0)
const today = Date.now() // 1556177004146

const today = new Date()
	today.getTime() // 1556177024434
	today.getMinutes()
	today.getHours()
	today.getDate() // day of the month (1 - 31)
	today.getMonth() // month start with 0 => (0 - 11)
	today.getFullYear()
	today.getDay() // day of the week (0-6)
```

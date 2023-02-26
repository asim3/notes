## Base
`./resources/views/components/my_base.blade.php`
```php
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Web Title</title>
</head>
<body>
    <h1>My Base</h1>

    {{ $my_content }}

</body>
</html>
```


## View
`./resources/views/components/my_view.blade.php`
```php
<x-my_base my_content="Helllo there">

</x-my_base>


# OR


<x-my_base>

    <x-slot name="my_content">

        <h1>My View</h1>

    </x-slot>

</x-my_base>
```


## 
```php
<button {{ $attributes }}> {{ $slot }}</button>
```

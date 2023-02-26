## my_base.blade.php
```php
<h1>My Base</h1>

@yield("my_content")
```


## my_view.blade.php
```php
@extends("my_base")

@section("my_content")
    <h1>My View</h1>

    @if(isset($object_list))
        @foreach ($object_list as $object)
            {{ $object['id'] }}
            <br />
            {{ $object['first_name'] }}
            <br />
            {{ $object['last_name'] }}
            <br />
            {{ $object['description'] }}
            <hr />
        @endforeach
    @endif

@endsection
```


## incloude
```php
@incloude("my_partials._my_block")
```

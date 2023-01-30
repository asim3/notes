## if
```php
@if(count($object_list) == 0)
    <h2>No listings found</h2>
@else
    <h2>{{ $object_list }}</h2>
@endif


@unless(count($object_list) == 0)
    @foreach ($object_list as $object)
        <h2>{{ $object['title'] }}</h2>
    @endforeach
@else
    <h2>No listings found</h2>
@endunless
```


## is set
```php
@isset($object_list)
    @foreach ($object_list as $object)
        <h2>{{ $object['title'] }}</h2>
    @endforeach
@endisset


@if(isset($object_list))
    @foreach ($object_list as $object)
        <h2>{{ $object['title'] }}</h2>
    @endforeach
@endif


@empty($object_list)
    <h2>No object_list</h2>
@endempty
```


## for
```php
@for ($i = 0; $i < 10; $i++)
    <h2>
        The current value is {{ $i }}
    </h2>
@endfor


@if(isset($object_list))
    @foreach ($object_list as $object)
        <h2>{{ $object['title'] }}</h2>
    @endforeach
@endif


@if(isset($object_list))
    @forelse ($object_list as $object)
        <h2>{{ $object['title'] }}</h2>
    @empty
        <p>No users</p>
    @endforelse
@endif
```


## object_list
```php
@if(isset($object_list))
    @foreach ($object_list as $object)
        {{ $object['id'] }}
        <br />
        {{ $object['name'] }}
        <br />
        {{ $object['email'] }}
        <br />
        {{ $object['created_at'] }}
        <br />
        {{ $object['updated_at'] }}
        <hr />
    @endforeach
@endif
```


## debug
```php
{{dd('will you reach here ')}}

{{ddd('will you reach here ')}}
```


#### my_base.blade.php
```blade
<h1>My Base</h1>

@yield("my_content")
```


#### my_view.blade.php
```blade
@extends("my_base")

@section("my_content")

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
```blade
@incloude("my_partials._my_block")
```


## public asset
```blade
<img src="{{ asset("images/no-image.png") }}" alt="" />
```

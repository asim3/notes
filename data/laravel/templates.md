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

##

```php

```

##

```php

```

##

```php

```

##

```php

```

##

```php

```

## Eloquent Model

```bash
php artisan make:model AsimModel -mcf

# -m, --migration       Create a new migration file for the model
# -c, --controller      Create a new controller for the model
# -f, --factory         Create a new factory for the model
# -s, --seed            Create a new seeder for the model


INFO  Model      [app/Models/AsimModel.php] created successfully.  
INFO  Factory    [database/factories/AsimModelFactory.php] created successfully.  
INFO  Migration  [database/migrations/2023_01_24_052001_create_asim_models_table.php] created successfully.  
INFO  Controller [app/Http/Controllers/AsimModelController.php] created successfully.  
```



```blade
@if(isset($object_list))
    @forelse ($object_list as $object)
        <h2>{{ $object['title'] }}</h2>
    @empty
        <p>No users</p>
    @endforelse
@endif
```

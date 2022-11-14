## class properties
```php
class MyClass {
    public $name;
    private $my_private;
    protected $my_protected;
}

$my_user = new MyClass();

$my_user->name = "Asim";

$my_user->my_private = "Asim"; 
// Fatal error: Uncaught Error: Cannot access private property MyClass::$my_private

$my_user->my_protected = "Asim";
// Fatal error: Uncaught Error: Cannot access protected property MyClass::$my_protected

var_dump($my_user);
/*  
    object(MyClass)#1 (3) { 
        ["name"]=> string(4) "Asim" 
        ["my_private":"MyClass":private]=> NULL 
        ["my_protected":protected]=> NULL 
    }
*/
```


## class methods
```php
class MyClass {
    public $name;
    private $my_private;
    protected $my_protected;

    function set_my_private($text) {
      $this->my_private = $text;
    }

    function set_my_protected($text) {
      $this->my_protected = $text;
    }
}

$my_user = new MyClass();

$my_user->name = "Asim";

$my_user->set_my_private("Bader");

$my_user->set_my_protected("Ahmed");

var_dump($my_user);
/*  
    object(MyClass)#1 (3) { 
        ["name"]=> string(4) "Asim" 
        ["my_private":"MyClass":private]=> string(5) "Bader" 
        ["my_protected":protected]=> string(5) "Ahmed" 
    }
*/
```


## constructor
```php
class MyClass {
    public $name;
    private $my_private;
    protected $my_protected;

    public function __construct() {
        echo "printed from constructor";
    }

    function __destruct() {
      // Destructor is called when an object is destroyed or the end of the script.
      echo "<br>The user name is {$this->name}.";
    }
}

$my_user = new MyClass();
// printed from constructor
// The user name is .
```


## Inheritence
```php
class MyClass {
    public $name = 111;
    private $my_private = 222;
    protected $my_protected = 333;
    
    function my_function() {
        echo "Hi from MyClass";
        echo "<br> name: " . $this->name; // 999
        echo "<br> my_private: " . $this->my_private; // 222
        echo "<br> my_protected: " . $this->my_protected; // 777
        echo "<br><br><br>";
    }
}


class MyInheritence extends MyClass {
    function my_function() {
        
        $this->name = 999;
        $this->my_private = 888;
        $this->my_protected = 777;

        parent::my_function();

        echo "Hi from MyInheritence";
        echo " <br> name: " . $this->name; // 999
        echo " <br> my_private: " . $this->my_private; // 888
        echo " <br> my_protected: " . $this->my_protected; // 777
        echo "<br><br><br>";
    }
}


$my_user = new MyInheritence();

$my_user->name = "Asim";

$my_user->my_private = "Bader"; 

// $my_user->my_protected = "Ahmed";
// Fatal error: Uncaught Error: Cannot access protected property MyInheritence::$my_protected

$my_user->my_function();

var_dump($my_user);
/*  object(MyInheritence)#1 (4) { 
        ["name"]=> int(999) 
        ["my_private":"MyClass":private]=> int(222) 
        ["my_protected":protected]=> int(777) 
        ["my_private"]=> int(888) 
    }
*/
```

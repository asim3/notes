`nano /tmp/my_test.py`
```py
from unittest import TestCase

class TestOne(TestCase):
    def setUp(self):
        pass
        # self.fish_tank = FishTank()
        
    def test_one(self):
        actual = True
        expected = True
        self.assertEqual(actual, expected)

    def test_exception(self):
        with self.assertRaises(ValueError) as exception_context:
            raise ValueError("my text")
        self.assertEqual(str(exception_context.exception), "my text")
```


## run
```py
from unittest import main as unit_test_main


if __name__ == '__main__':
    unit_test_main()
```


## OR !!!
```bash
python -m unittest /tmp/my_test.py
```

`nano /tmp/my_test.py`
```py
from unittest import TestCase

class TestOne(TestCase):
    def setUp(self):
        pass
        # self.fish_tank = FishTank()

    def tearDown(self):
        """
        If setUp() succeeded, tearDown() will be run whether 
        the test method succeeded or not.
        """
        # self.widget.dispose()
        
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
`python -m unittest discover --catch -s ./tests`

## OR

```py
from unittest import main as unit_test_main


if __name__ == '__main__':
    unit_test_main()
```


## OR
```py
#!/usr/bin/env python3

from pathlib import Path
from unittest import TestLoader, TextTestRunner


BASE_DIR = Path(__file__).resolve().parent


loader = TestLoader().discover(BASE_DIR / "tests")

test_data = TextTestRunner().run(loader)

if not test_data.wasSuccessful():
    exit(44)
```

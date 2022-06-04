[reference](https://docs.pytest.org/en/stable/reference/index.html)


## install
```bash
pip install -U pytest


# run tests
pytest
```


## test function
`nano ./test_sample.py`
```py
def my_function(x):
    return x + 1


def test_answer():
    assert my_function(3) == 5
```


## test exception
```py
import pytest


def my_function():
    raise SystemExit(1)


def test_mytest():
    with pytest.raises(SystemExit):
        my_function()
```


## test as Class
```py
class TestClass:
    def test_one(self):
        x = "this"
        assert "h" in x

    def test_two(self):
        x = "hello"
        assert hasattr(x, "check")
```

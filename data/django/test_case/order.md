```py
from django.test import TestCase

class MyTestCase(TestCase):
    def setUp(self):
        print("setUp")

    def test_10_version(self):
        print("10")

    def test_20_version(self):
        print("20")

    def test_30_version(self):
        print("30")

    def test_1_version(self):
        print("1_")

    def test_0001_version(self):
        print("0001")

    def test_01_version(self):
        print("01")

    def test_001_version(self):
        print("001")
```


`python manage.py test kubernetes.tests.test_my`
```
setUp
0001
.setUp
001
.setUp
01
.setUp
10
.setUp
1_
.setUp
20
.setUp
30
.
```

## Sequence Matcher
```py
from django.test import TestCase
from difflib import SequenceMatcher


class SimilarTestCase(TestCase):
    data = [
        ("Asim", "Asim", 1.00),
        ("Asim", "Asim", 0.75),
        ("Asim", "asim", 0.75),
        ("Asim", "ASIM", 0.25),
        ("Asim", "Bader", 0.00),
        ("Asim", "EDCBA", 0.222),
        ("Asim", "MMMM", 0.00),
        ("Asim", "asim", 0.75),
        ("أحمد محمد محمود", "احمد", 0.316),
        ("أحمد محمد محمود", "خالد", 0.105),
        ("أحمد محمد محمود", "المهندس حمد احمد محمود محمد خالد صالح", 0.500),
        ("أحمد محمد محمود", "احــمـــد", 0.25),
        ("أحمد محمد محمود", "بسم الله الرحمن الرحيم", 0.216),
        ("أحمد محمد محمود", "محمود محمد احمد", 0.8),
        ("أحمد محمد محمود", "أحمدمحمدمحمود", 0.929),
        ("أحمد محمد محمود", "احمـد مجمد ممود", 0.533),
        ("أحمد محمد محمود", "عمر", 0.111),
        ("أحمد محمد محمود", "م", 0.125),
        ("أحمد محمد محمود", "ح", 0.125),
        ("أحمد محمد محمود", "د", 0.125),
    ]

    def test_similar(self):
        for text_1, text_2, expected in self.data:
            actual = SequenceMatcher(None, text_1, text_2).ratio()
            self.assertEqual(expected, round(actual, 3),
                             f"{text_1} :: {text_2}")
```

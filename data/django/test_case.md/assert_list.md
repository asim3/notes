## test
```py
from django.test import TestCase


class AsimTestCase(TestCase):
    def test_my_data(self):
        self.assertEqual(self.data, "asim")
        self.assertNotEqual()

        self.assertFalse()
        self.assertTrue()

        # Is
        self.assertIs()
        self.assertIsNot()
        self.assertIsNone()
        self.assertIsNotNone()
        self.assertIsInstance()
        self.assertNotIsInstance()

        # JSON
        self.assertJSONEqual()
        self.assertDictEqual()

        # Greater
        self.assertLess()
        self.assertLessEqual()
        self.assertGreater()
        self.assertGreaterEqual()
        
        # In
        self.assertIn()
        self.assertNotIn()

        # other
        self.assertQuerysetEqual()
        self.assertNumQueries()
        self.assertRedirects()
        self.assertURLEqual()
        self.assertContains()
        self.assertNotContains()
        self.assertFormError()
        self.assertFormsetError()
        self.assertTemplateUsed()
        self.assertTemplateNotUsed()
        self.assertRaisesMessage()
        self.assertWarnsMessage()
        self.assertFieldOutput()
        self.assertHTMLEqual()
        self.assertHTMLNotEqual()
        self.assertInHTML()
        self.assertJSONNotEqual()
        self.assertXMLEqual()
        self.assertXMLNotEqual()
        self.assertRaises()
        self.assertWarns()
        self.assertLogs()
        self.assertAlmostEqual()
        self.assertNotAlmostEqual()
        self.assertSequenceEqual()
        self.assertListEqual()
        self.assertTupleEqual()
        self.assertSetEqual()
        self.assertDictContainsSubset()
        self.assertCountEqual()
        self.assertMultiLineEqual()

        # Equals
        self.assertEquals()
        self.assertNotEquals()
        self.assertAlmostEquals()
        self.assertNotAlmostEquals()

        # Regex
        self.assertRaisesRegex()
        self.assertWarnsRegex()
        self.assertRegex()
        self.assertNotRegex()
        self.assertRaisesRegexp()
        self.assertRegexpMatches()
        self.assertNotRegexpMatches()

        # fail
        self.failUnlessEqual()
        self.failIfEqual()
        self.failUnlessAlmostEqual()
        self.failIfAlmostEqual()
        self.failUnless()
        self.failUnlessRaises()
        self.failIf()

        # default
        self.defaultTestResult()
```

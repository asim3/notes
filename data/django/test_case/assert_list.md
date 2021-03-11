## test
```py
from django.test import TestCase


class AsimTestCase(TestCase):
    def test_my_data(self):
        self.assertFalse()
        self.assertTrue()

        # Equal
        self.assertEqual(self.data, "asim")
        self.assertNotEqual()

        # Equal(s)
        self.assertEquals()
        self.assertNotEquals()
        self.assertAlmostEquals()
        self.assertNotAlmostEquals()

        # Equal other
        self.assertAlmostEqual()
        self.assertNotAlmostEqual()
        
        self.assertDictEqual()
        self.assertListEqual()
        self.assertTupleEqual()
        self.assertSetEqual()
        
        self.assertQuerysetEqual()
        self.assertSequenceEqual()
        self.assertCountEqual()
        self.assertMultiLineEqual()

        # Is
        self.assertIs()
        self.assertIsNot()
        self.assertIsNone()
        self.assertIsNotNone()
        
        # In
        self.assertIn()
        self.assertNotIn()
        
        # Instance
        self.assertIsInstance()
        self.assertNotIsInstance()

        # web
        self.assertURLEqual()
        self.assertInHTML()
        self.assertHTMLEqual()
        self.assertHTMLNotEqual()
        self.assertXMLEqual()
        self.assertXMLNotEqual()

        # JSON
        self.assertJSONEqual()
        self.assertJSONNotEqual()

        # Greater
        self.assertLess()
        self.assertLessEqual()
        self.assertGreater()
        self.assertGreaterEqual()

        # other
        self.assertNumQueries()
        self.assertRedirects()
        self.assertContains()
        self.assertNotContains()
        self.assertFormError()
        self.assertFormsetError()
        self.assertTemplateUsed()
        self.assertTemplateNotUsed()
        self.assertRaisesMessage()
        self.assertWarnsMessage()
        self.assertFieldOutput()
        self.assertRaises()
        self.assertWarns()
        self.assertLogs()
        self.assertDictContainsSubset()

        # Regex
        self.assertRaisesRegex()
        self.assertWarnsRegex()
        self.assertRegex()
        self.assertNotRegex()
        self.assertRaisesRegexp()
        self.assertRegexpMatches()
        self.assertNotRegexpMatches()

        # fail
        self.failIf()
        self.failUnless()
        self.failIfEqual()
        self.failUnlessEqual()
        self.failIfAlmostEqual()
        self.failUnlessAlmostEqual()
        
        # fail unless raises
        self.failUnlessRaises()

        # default
        self.defaultTestResult()
```

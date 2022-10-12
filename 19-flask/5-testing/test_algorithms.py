from unittest import TestCase
from app import reverse_str, is_palindrome
class AlgorithmsTestCase(TestCase):
    '''Unit tests'''

    def test_reverse(self):
        self.assertEqual(reverse_str('hello'), 'olleh')
    
    def test_is_palindrome(self):
        self.assertTrue(is_palindrome('racecar'))
        self.assertTrue(is_palindrome('tacocat'))
        self.assertFalse(is_palindrome('taco'))



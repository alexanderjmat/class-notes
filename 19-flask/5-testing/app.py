def reverse_str(s):
    return s[::-1]

def is_palindrome(s):
    reversed = reverse_str(s)
    return s.lower() == reversed.lower()


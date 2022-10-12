import math
import random

class Triangle:
    '''
    A class used to represent a right triagle

    Attributes
    --------------
    a: int, length of side a 
    b: int, length of side b

    '''
    def __init__(self, a, b):
        self.a = a
        self.b = b
    
    def __repr__(self):
        return f"Triangle a = {self.a} b = {self.b}"
    
    def __str__(self):
        return self.describe()
    
    def __eq__(self, other):
        return self.a == other.a and self.b == other.b
    
    @classmethod
    def random_tri(cls):
        '''Class method that returns Triangle with random sides        '''
        return cls(random.randint(1, 20 ), random.randint(1, 20))

    
    def get_hypo(self):
        '''Class method which returns hypotenuse of triangle'''
        return math.sqrt(self.a ** 2 + self.b ** 2)
    
    def get_area(self):
        '''Class method which returns area of triangle'''
        return self.a * self.b / 2
    
    def describe(self):
        '''Class method which returns description of triangle attributes'''
        return f"I am a triangle with side lengths of {self.a} and {self.b}."


class ColoredTriangle(Triangle):
    def __init__(self, a, b, color):
        super().__init__(a, b)
        self.color = color
    
    def describe(self):
        msg = super().describe()
        return msg + f" My color is {self.color}"



    

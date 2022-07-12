import math
import random

class Triangle:
    def __init__(self, a, b):
        self.a = a
        self.b = b
    
    @classmethod
    def random_tri(cls):
        return cls(random.randint(1, 20 ), random.randint(1, 20))

    
    def get_hypo(self):
        return math.sqrt(self.a ** 2 + self.b ** 2)
    
    def get_area(self):
        return self.a * self.b / 2
    
tri = Triangle(3, 4)
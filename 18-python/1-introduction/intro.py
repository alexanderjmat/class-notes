#Declaring variables

#python variable name style is lower-snake-case "like_this"
#no keyword to declare variables
#if you want to indicate that something should be a constant, you declare it in all caps
#variables are function scoped


#Numbers

# x // y floors division to the nearest int
# by default division returns a float
# complex number notation: complex(x, y)
#round(x, y) where x is a float and y is an int will round x to y number of decimal places
#is_integer() tests whether a float is a whole number
#hex() returns the hexadecimal representation of a number
#dividing by zero in python returns an error


#strings

#strings in python are very similar to js
#python has triple quotes, which allow multi-line stings
#f-string is like a template literal in js. notation: f'string here'
#escape characters like \t and \n will tab or put a string in a new line respectively


#lists

#lists are like arrays from js 
#lists are ordered
#lists are hetereogenerous which means it can take mixed types


#booleans

#booleans in python are capitalized
#comparing different data types will return an error in python


#equality operators

#equality is strict about types
#structures with same items ARE equal
#is checks for structure identity 


#indentation

#indentation is where python is very unique from js
#rather than blocks, python reads indentation to determine sco



#running files

# from terminal: python(version) filename.py
# from ipython: %run filename.py


#conditionals

#python conditionals: if, elif, else
#no parentheses required

# age = 19
# if age >= 21:
#     print('you can drink')
# elif age >= 18:
#     print('come in but no drinking')
# else:
#     print('go home')


#ternary operators

# color = 'blue'

# print('GOOD CHOICE') if color == 'teal' else print('bad')
#syntax - do_if_true if condition else do_if_false


#boolean operations

#and, or, not

# x = 102
# x == 103 or x > 100 

# age = 62
# if age < 10 or age >= 65:
#     print('your ticket is $5')
# else: 
#     print('your ticket is $10')


#truthiness

#falsy values in python: 0, 0.0, "", None, False, [], {}, set()
#None is like null in js


#while loops

# count = 0

# while count <=100:
#     print(count)
#     count += 10;
# print('done')

# guess = input('enter guess')


#for loops

#for loops in python are very different than in js. they are more similar to for of loops in js
#syntax - for iterableItem in iterableStructure:
# colors = ['red', 'orange', 'green']
# for color in colors:
#     print(color)


#range()

#range() allows you to easily designate range of iteration in a loop, or even generate a list


#functions

#syntax: def function_name(parameters)
def greet(name):
    return (f"hello {name}!")

def divide(a, b):
    if type(a) is int and type(b) is int:
        return a / b
    return 'a and b must be ints'


#function arguments

#python functions will return an error if the number of parameters in the call is greater or less than the designated number of parameters
#in python, you can pass arguments in any order in a function call by using param_name="value"
#help(function_name) will display that function header
#you can hard code a parameter value simply via param_name=value, but they must come at the end of the parameter list


#comments and docstrings

#dir(attribute) will show methods available for that attribute
#help() will display a list of documentation for whatever the parameter is
#a docstring is a string at the very beginning of a function body that will display when help(function_name) is called
#style standards: triple quotes always


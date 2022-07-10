###data structures

##length

#python includes lots of efficient data structures
#length syntax - len(structure)
#numbers dont have a len

##lists continued

#list(range(x, y, z))
vegan_nos = ['eggs', 'meat', 'dairy', 'fish', 'figs']
pie_ingredients = ['flour', 'apples', 'sugar', 'eggs', 'salt']

for food in pie_ingredients:
    if food in vegan_nos:
        print(f"{food} is non-vegan!")

#python returns an error if you select an index out of range
#negative indices will count from the back
#cannot add to a list via index method

##list slicing

#lists in python are reference types
#you can slice a python list via list[start: stop: step]

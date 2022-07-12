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

##list splicing

#splicing replaces a selected index up to another index with a list of values
#syntax: list[index to replace: index to fill until]

colors = ['red', 'orange', 'yellow']

colors[0:1] = ['dark red', 'pink'] #=> returns ['dark red', 'pink 'orange', 'yellow']

##list methods

#append, clear, copy, count, extend, index, insert, pop, remove, reverse, sort

#append adds to the end of a list
composers = ['bach', 'beethoven', 'chopin', 'mozart']
composers.append('rachmaninoff')

#copy return a copy of the list
composers_copy = composers.copy()
#only makes a shallow copy

#count returns how many times an element occurs in a list
composers.count('bach') #returns 1

#extend will add the contents of a list onto the end of another list
new_composers = ["scriabin", "stravinsky"]
composers.extend(new_composers)

#index returns the index of some element
composers.index('beethoven') #returns 1
#only returns the first matching index

#insert adds an element to a list at a specific index, but does not replace any elements
composers.insert(0, 'brahms')

#pop removes element at specific index, and removes from the end if no index if provided 

#reverse reverses a list in place (doesnt return a copy)

#sort sorts a list in place
#only sorts a list that contains elements of the same type

#python list methods always return none by default

##strings continued

#strings in python are immutable, just like in js
#str(structure) turns that structure into a string
#in works with strs
#strs can be sliced but not spliced
#you can concatenate with addition AND multiplication

##string methods

#many more string methods than list methods
#count returns number of times char occurs in str
#endswith returns a boolean based on whether a str ends in a specific char or set of chars
#startswith does the same but for the start of the str
#find finds the first index of a char occurence in a str
#isdigit returns whether a string is comprised fully of numbers
#join concats one string to another 
#lower returns the string lowercase. islower
#upper returns the string uppercase. isupper
#capitalize uppercases first letter
#replace replaces str char with another str char. 
#split splits a str into a list. split doesnt split by individual chats like js. use list() instead
#strip removes extra trailing white space at beginning and end of a str

##dictionaries

#dictionaries are key value pairs
#python dictionary keys can be any immutable type
#python is more like a js map in this way
#dict() makes a new dictionary

##iterating over dictionaries
#dictionaries are ordered by insertion order

##dictionary methods

#pop removes a specific key-value pair
#popitem returns a specific key-value pair
#fromkeys creates a dictionary from an iterable key value pair
#clear will empty the dictionary

##sets

#a set is a collection of elements wrapped in curly braces => {1, 2, 3, 4}
#set(structure) - constructor function
#sets are unordered 
#sets only accept immutable types
#sets operate on constant time, which means that the length of the set doesnt impact how much time it takes to parse

##set methods

#in
#pop() - removes arbitrary element
#remove(x) - removes specific element
#len(x) - gets length
# add (x) adds element to set
#copy - creates copy of set

##set operations

#union(x) or | - returns set union
#difference(x) or - returns elements of set 1 that are not in set 2
#symmetric_difference or ^ - returns everything that is not in intersection
#intersection(x) or & - returns everything that is included in both sets

##tuple

#tuples are immutable, ordered collections
#syntax: (elements)
#cannot create tup with parens for one number unless you add trailing comma at end (3,)
#tuples are faster than lists, and can be used as dictionary keys or put into sets

##list comprehensions

#list comprehensions are very unique to python
#they allow you to create list methods with a one line square bracket [what_to_do for thing in list]

##more on comprehensions

##dictionary and set comprehensions

##open files

#open(filepath, mode)
#mode: r for reading and w for writing







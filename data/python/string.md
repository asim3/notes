## capitalize
```py
my_string = 'aBcDeFG aBcDeFG aBcDeFG'

my_string.capitalize()
# 'Abcdefg abcdefg abcdefg'
my_string.lower()
# 'abcdefg abcdefg abcdefg'
my_string.upper()
# 'ABCDEFG ABCDEFG ABCDEFG'
```


## split & replace
```py
my_string = 'aBcDeFG aBcDeFG aBbbbbb \n QwErTy QwErTy QwErTy \n '

my_string.split()
# ['aBcDeFG', 'aBcDeFG', 'aBbbbbb', 'QwErTy', 'QwErTy', 'QwErTy']
my_string.splitlines()
# ['aBcDeFG aBcDeFG aBbbbbb ', ' QwErTy QwErTy QwErTy ', ' ']
my_string.strip()
# 'aBcDeFG aBcDeFG aBbbbbb \n QwErTy QwErTy QwErTy'

my_string.replace('aBbbbbb', 'ccccccc')
# 'aBcDeFG aBcDeFG ccccccc \n QwErTy QwErTy QwErTy \n '
my_string.find('QwErTy')
# 26
```


## cut
```py
my_string = str(123456789)
my_string[1:3]  # '23'
my_string[2:]   # '3456789'
my_string[:2]   # '12'
my_string[:-3]  # '123456'
my_string[-3:]  # '789'
```


## `%` - Old-school
```python
'Hello, %s. You are %d.' % ('asim', 77)
# 'Hello, asim. You are 77.'

kwargs = {
    'cls': "aaa",
    'bound': "bbb",
    'valid': "eee",
    'fields': "ddd",
    'error': "rrr",
}
'%(cls)s - %(bound)s   %(valid)s, %(fields)s' % kwargs
```


## str.format() "slow"
```python
print("{} - {}".format(123, 444)) 
print("{0} - {1}".format("Aaa", "Bbbb")) 
print("{0} - {gfg} - {1}".format("Aaa", "Bbb", gfg ="Ccc"))
```


> To limit the precision 
```python
print ("my {0} is {1:.2f}%".format("GPA", 78.234876)) 
```


```python
for i in range(1, 60, 10): 
    print("{:6d} {:6d} {:6d} {:6d}".format(i, i * 2, i ** 3, i ** 4))
#     1      2      1      1
#    11     22   1331  14641
#    21     42   9261 194481
```


## f-Strings `>= python 3.6`
```python
name = "Aaaa"
age = 74

f"Hello, {name}. You are {age}."
f"{2 * 37}"
```


```python
message = (
    f"3 * 6 = {3 * 6}. "
    f"3 * 7 = {3 * 7}. "
    f"3 * 8 = {3 * 8}. "
)
# or
message = f"5 * 6 = {5 * 6}" \
    f"5 * 5 = {5 * 5}. " \
    f"5 * 7 = {5 * 7}."

print(message)
# 3 * 6 = 18. 3 * 7 = 21. 3 * 8 = 24. 
```


## other
```py
my_string = 'aBcDeFG aBcDeFG aBbbbbb \n QwErTy QwErTy QwErTy \n '


my_string.encode("UTF-8")
# b'aBcDeFG aBcDeFG aBbbbbb \n QwErTy QwErTy QwErTy \n '
my_string.startswith('aBc')
# True
my_string.startswith('abc')
# False
my_string.endswith('\n ')
# True

'123.5'.isnumeric()
# False
'123.5'.isdigit()
# False

'123'.isnumeric()
# True
'123'.isdigit()
# True
```

## List
```python
my_list = []
my_list = ["mouse", [8, 4, 6], ['a']]
my_list[1][2] # 6
my_list[1][-2] # 4
```


```python
"aaa- bbccc- ddd".split("- ") # ['aaa', 'bbccc', 'ddd']
```


```python
my_list = [1, 2, 3, 4, 5]
my_list[0] = 7
my_list[1:3] = [20, 30, 40, 50]
             # [1, 20, 30, 40, 50, 4, 5]
my_list[1:1] = [20, 30, 40, 50]
             # [1, 20, 30, 40, 50, 2, 3, 4, 5]
```


```python
my_list = [1, 2, 3]
my_list.append(7)    # >>> [1, 2, 3, 7]
my_list.extend([10, 20, 30])    # >>> [1, 2, 3, 10, 20, 30]

["re"] * 3    # >>> ["re", "re", "re"]
```


```python
my_list = [1, 2, 3, 4, 5]
my_list[:1] # [1]
my_list[1:] # [2, 3, 4, 5]
my_list[1:3] # [2, 3]
my_list[1:-3] # [2]
my_list[-3:4] # [3, 4]
my_list[-3:-1] # [3, 4]
```


```py
my_list = [1, 2, 3]
print(my_list)
# [1, 2, 3]
print(*my_list)
# 1 2 3
```

```py
my_list = [1, 2, 3, 4, 5, 6]

a, *b, c = my_list

print(a)
# 1
print(b)
# [2, 3, 4, 5]
print(c)
# 6

print([33, *my_list])
# [33, 1, 2, 3, 4, 5, 6]

print([*"Asim"])
# ['A', 's', 'i', 'm']
print(*"Asim")
# A s i m

```


```python
# python code to iterate over a list 
list = [1, 3, 5, 7, 9] 
   
# Using list comprehension 
[print(i) for i in list] 

# Using enumerate()  
for i, val in enumerate(list): 
    print (i, ",",val) 
```

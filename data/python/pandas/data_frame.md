## data types
```py
date_and_time = pd.Timestamp('20230601')
# Timestamp('2023-06-01 00:00:00')


list_of_number_123 = pd.Series(123, index=list(range(4)), dtype='float32')
# 0    123.0
# 1    123.0
# 2    123.0
# 3    123.0
# dtype: float32


list_of_number_8 = np.array([8] * 4, dtype='int32')
# array([8, 8, 8, 8], dtype=int32)


list_of_dublicate_names = pd.Categorical(['test', 'train', 'test', 'train'])
```


## data frame
```py
print("--- DataFrame --------------------------")
my_dataframe = pd.DataFrame({
    'A': 987654321,
    'B': date_and_time,
    'C': list_of_number_123,
    'D': list_of_number_8,
    'E': list_of_dublicate_names,
    'F': 'asim',
})


print(my_dataframe)
#            A          B      C  D      E     F
# 0  987654321 2023-06-01  123.0  8   test  asim
# 1  987654321 2023-06-01  123.0  8  train  asim
# 2  987654321 2023-06-01  123.0  8   test  asim
# 3  987654321 2023-06-01  123.0  8  train  asim
```


## data frame info
```py
print(my_dataframe.dtypes)
# A             int64
# B    datetime64[us]
# C           float32
# D             int32
# E          category
# F               str
# dtype: object
```


## data frame head and tail
```py

print(my_dataframe.head(2))


print(my_dataframe.tail(2))


print(my_dataframe.index)
# Index([0, 1, 2, 3], dtype='int64')


print(my_dataframe.columns)
# Index(['A', 'B', 'C', 'D', 'E', 'F'], dtype='str')
```

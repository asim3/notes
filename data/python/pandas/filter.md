## Filter
```py
my_dataframe[my_dataframe["total_bill"] > 10]
#      total_bill   tip     sex smoker   day    time  size
# 0         16.99  1.01  Female     No   Sun  Dinner     2
# 1         10.34  1.66    Male     No   Sun  Dinner     3
# 2         21.01  3.50    Male     No   Sun  Dinner     3
# 3         23.68  3.31    Male     No   Sun  Dinner     2
# 4         24.59  3.61  Female     No   Sun  Dinner     4
# ..          ...   ...     ...    ...   ...     ...   ...
# 239       29.03  5.92    Male     No   Sat  Dinner     3
# 240       27.18  2.00  Female    Yes   Sat  Dinner     2
# 241       22.67  2.00    Male    Yes   Sat  Dinner     2
# 242       17.82  1.75    Male     No   Sat  Dinner     2
# 243       18.78  3.00  Female     No  Thur  Dinner     2

# [227 rows x 7 columns]
```


```py
my_dataframe["time"] == "Dinner"
# 0      True
# 1      True
# 2      True
# 3      True
# 4      True
#        ...
# 239    True
# 240    True
# 241    True
# 242    True
# 243    True
# Name: time, Length: 244, dtype: bool
```


```py
my_dataframe[(my_dataframe["time"] == "Dinner") & (my_dataframe["tip"] > 5.00)]
#      total_bill    tip     sex smoker  day    time  size
# 23        39.42   7.58    Male     No  Sat  Dinner     4
# 44        30.40   5.60    Male     No  Sun  Dinner     4
# 47        32.40   6.00    Male     No  Sun  Dinner     4
# 52        34.81   5.20  Female     No  Sun  Dinner     4
# 59        48.27   6.73    Male     No  Sat  Dinner     4
# 116       29.93   5.07    Male     No  Sun  Dinner     4
# 155       29.85   5.14  Female     No  Sun  Dinner     5
# 170       50.81  10.00    Male    Yes  Sat  Dinner     3
# 172        7.25   5.15    Male    Yes  Sun  Dinner     2
# 181       23.33   5.65    Male    Yes  Sun  Dinner     2
# 183       23.17   6.50    Male    Yes  Sun  Dinner     4
# 211       25.89   5.16    Male    Yes  Sat  Dinner     4
# 212       48.33   9.00    Male     No  Sat  Dinner     4
# 214       28.17   6.50  Female    Yes  Sat  Dinner     3
# 239       29.03   5.92    Male     No  Sat  Dinner     3
```


```py
my_dataframe[(my_dataframe["size"] >= 5) | (my_dataframe["total_bill"] > 45)]
#      total_bill    tip     sex smoker   day    time  size
# 59        48.27   6.73    Male     No   Sat  Dinner     4
# 125       29.80   4.20  Female     No  Thur   Lunch     6
# 141       34.30   6.70    Male     No  Thur   Lunch     6
# 142       41.19   5.00    Male     No  Thur   Lunch     5
# 143       27.05   5.00  Female     No  Thur   Lunch     6
# 155       29.85   5.14  Female     No   Sun  Dinner     5
# 156       48.17   5.00    Male     No   Sun  Dinner     6
# 170       50.81  10.00    Male    Yes   Sat  Dinner     3
# 182       45.35   3.50    Male    Yes   Sun  Dinner     3
# 185       20.69   5.00    Male     No   Sun  Dinner     5
# 187       30.46   2.00    Male    Yes   Sun  Dinner     5
# 212       48.33   9.00    Male     No   Sat  Dinner     4
# 216       28.15   3.00    Male    Yes   Sat  Dinner     5
```



## filter rows with NaN
```py
my_dataframe[my_dataframe["tip"].isna()]
# Empty DataFrame
# Columns: [total_bill, tip, sex, smoker, day, time, size]
# Index: []
```

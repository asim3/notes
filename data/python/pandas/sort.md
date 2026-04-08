## sort
```py
my_dataframe_2 = my_dataframe.sort_values("total_bill", ascending=False).head(5)

print(my_dataframe_2.head(5))
#      total_bill    tip   sex smoker  day    time  size
# 170       50.81  10.00  Male    Yes  Sat  Dinner     3
# 212       48.33   9.00  Male     No  Sat  Dinner     4
# 59        48.27   6.73  Male     No  Sat  Dinner     4
# 156       48.17   5.00  Male     No  Sun  Dinner     6
# 182       45.35   3.50  Male    Yes  Sun  Dinner     3
```

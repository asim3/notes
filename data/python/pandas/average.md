## average
how tip amount differs by day of the week
```py
my_dataframe.groupby("day").agg({"tip": "mean", "day": "size"})
#            tip  day
# day
# Fri   2.734737   19
# Sat   2.993103   87
# Sun   3.255132   76
# Thur  2.771452   62
```


## average
grouping by more than one column
```py
my_dataframe.groupby(["smoker", "day"]).agg({"tip": ["size", "mean"]})
#              tip
#             size      mean
# smoker day
# No     Fri     4  2.812500
#        Sat    45  3.102889
#        Sun    57  3.167895
#        Thur   45  2.673778
# Yes    Fri    15  2.714000
#        Sat    42  2.875476
#        Sun    19  3.516842
#        Thur   17  3.030000
```

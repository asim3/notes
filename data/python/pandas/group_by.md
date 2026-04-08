# group by
```py
my_dataframe.groupby("sex").count()
#         total_bill  tip  smoker  day  time  size
# sex
# Female          87   87      87   87    87    87
# Male           157  157     157  157   157   157


my_dataframe.groupby("sex").size()
# sex
# Female     87
# Male      157
# dtype: int64



# Alternatively
my_dataframe.groupby("sex")["total_bill"].count()
# sex
# Female     87
# Male      157
# Name: total_bill, dtype: int64
```

## data structure
```py
my_series = pd.Series([1, 3, 5, np.nan, 6, 8])
# 0    1.0
# 1    3.0
# 2    5.0
# 3    NaN
# 4    6.0
# 5    8.0
# dtype: float64


my_dates = pd.date_range('20230601', periods=6)
# DatetimeIndex([
#   '2023-06-01',
#   '2023-06-02',
#   '2023-06-03',
#   '2023-06-04',
#   '2023-06-05',
#   '2023-06-06'
# ], 
# dtype='datetime64[us]', freq='D')
```

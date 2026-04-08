## install
```bash
pip install numpy pandas
```


## csv to data frame
```py
import pandas as pd
import numpy as np


url = "https://raw.githubusercontent.com/pandas-dev/pandas/main/pandas/tests/io/data/csv/tips.csv"

my_dataframe = pd.read_csv(url)

print(my_dataframe.head(5))
#    total_bill   tip     sex smoker  day    time  size
# 0       16.99  1.01  Female     No  Sun  Dinner     2
# 1       10.34  1.66    Male     No  Sun  Dinner     3
# 2       21.01  3.50    Male     No  Sun  Dinner     3
# 3       23.68  3.31    Male     No  Sun  Dinner     2
# 4       24.59  3.61  Female     No  Sun  Dinner     4
```


## select
```py
print(my_dataframe[["total_bill", "tip", "smoker", "time"]].head(5))
#    total_bill   tip smoker    time
# 0       16.99  1.01     No  Dinner
# 1       10.34  1.66     No  Dinner
# 2       21.01  3.50     No  Dinner
# 3       23.68  3.31     No  Dinner
# 4       24.59  3.61     No  Dinner
```



# calculation
```py
my_dataframe_2 = my_dataframe.assign(tip_rate=my_dataframe["tip"] / my_dataframe["total_bill"])

print(my_dataframe_2.head(5))
#    total_bill   tip     sex smoker  day    time  size  tip_rate
# 0       16.99  1.01  Female     No  Sun  Dinner     2  0.059447
# 1       10.34  1.66    Male     No  Sun  Dinner     3  0.160542
# 2       21.01  3.50    Male     No  Sun  Dinner     3  0.166587
# 3       23.68  3.31    Male     No  Sun  Dinner     2  0.139780
# 4       24.59  3.61  Female     No  Sun  Dinner     4  0.146808
```

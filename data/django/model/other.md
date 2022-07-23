[raw SQL queries](https://docs.djangoproject.com/en/3.2/topics/db/sql/)


## DecimalField vs FloatField
> Always use `DecimalField` for money. 

Even simple operations (addition, subtraction) are not immune to float rounding issues:
```py
10.50 - 0.20
# 10.300000000000001

Decimal('10.50') - Decimal('0.20')
# Decimal('10.30')
```

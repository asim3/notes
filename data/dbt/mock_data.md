# mock data
`pip install pandas faker`

```py
import pandas
from faker import Faker
import random


# fake = Faker('en_US')
# fake_i18n = Faker(['ar_SA', 'en_US', 'hi_IN', 'it_IT', 'zh_CN', 'ja_JP' ])
fake = Faker(['ar_SA', 'en_US', 'hi_IN', 'it_IT', 'zh_CN', 'ja_JP' ])

num_rows = 10000

data = {
    'id': range(1, num_rows + 1),
    'name': [fake.name() for _ in range(num_rows)],
    'email': [fake.email() for _ in range(num_rows)],
    'address': [fake.address() for _ in range(num_rows)],
    'phone_number': [fake.phone_number() for _ in range(num_rows)],
    'job_title': [fake.job() for _ in range(num_rows)],
    'company': [fake.company() for _ in range(num_rows)],
    'birth_date': [fake.date_of_birth(minimum_age=18, maximum_age=90) for _ in range(num_rows)],
    'age': [random.randint(18, 90) for _ in range(num_rows)],
    'salary': [round(random.uniform(30000, 150000), 2) for _ in range(num_rows)],
    'is_active': [random.choice([True, False]) for _ in range(num_rows)],
    'country': [fake.country() for _ in range(num_rows)],
    'city': [fake.city() for _ in range(num_rows)],
    'zip_code': [fake.zipcode() for _ in range(num_rows)],
    'status': [random.choice(['Pending', 'Processing', 'Completed', 'Canceled']) for _ in range(num_rows)]
}

df = pandas.DataFrame(data)
# df.to_csv('delete_data_v005.csv', index=False)
df.to_json('delete_data_v006.json', orient='records', indent=4)
```

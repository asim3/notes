[yaml-docs](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started)
# YAML to dict
```py
import yaml

my_yaml = """
---
name: Asim 1
date: 2020
"""

my_obj = yaml.safe_load(my_yaml)
print(my_obj)
```
# multy YAML to dict
```py
import yaml

my_yaml = """
---
name: Asim 1
date: 2020
---
name: Asim 2
date: 2021
---
name: Asim 3
date: 2022
"""

my_obj_all = yaml.safe_load_all(my_yaml)
print(my_obj_all)
# <generator object load_all at 0x>

for my_obj in my_obj_all:
  print(my_obj)

# {'name': 'Asim 1', 'date': 2020}
# {'name': 'Asim 2', 'date': 2021}
# {'name': 'Asim 3', 'date': 2022}
```


## dict to yaml
```py
import yaml

my_obj = {'name': 'Asim 1', 'date': 2020, 'list': [11, 22, 33]}

my_yaml = yaml.safe_dump(my_obj)
print(my_yaml)
```


# JSON to dict
```py
import json

my_json =  '{ "name":"John", "age":30, "city":"New York"}'
my_obj = json.loads(my_json)

print(my_obj["age"])
```

## dict to json
```py
import json

my_obj = {
  "name": "John",
  "age": 30,
  "city": "New York"
}

my_json = json.dumps(my_obj)
m4_json = json.dumps(my_obj, indent=4)

print(my_json)
print(m4_json)
```

---


## YAML load all
```py
import yaml

my_yaml = """
---
name: Asim 1
date: 2020
---
name: Asim 2
list:
- 11
- 22
- 33
---
- name: Asim 3
- date: 31
"""

for data in yaml.safe_load_all(my_yaml):
    print(data)
```

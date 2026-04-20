## Date & Time
```py
from datetime import datetime, timedelta


now = datetime.now().strftime("%d/%m/%Y %H:%M:%S")


date = datetime.now()
date.strftime("%d/%m/%Y %H:%M:%S")
date.strftime("%d/%m/%Y %I:%M:%S %p")


datetime.now() 
datetime.now() - timedelta(minutes=10)
# datetime.datetime(2022, 6, 14, 10, 38, 0, 152986)
# datetime.datetime(2022, 6, 14, 10, 28, 0, 153026)
```


## convert string to datetime
```py
from datetime import datetime


date_string_1 = "21 June, 2018"

datetime.strptime(date_string_1, "%d %B, %Y")
# datetime.datetime(2018, 6, 21, 0, 0)


date_string_2 = "27-01-2021 11:00:00 PM"

datetime.strptime(date_string_2, "%d-%m-%Y %I:%M:%S %p")
# datetime.datetime(2021, 1, 27, 23, 0)
```


## Aladhan API
Fetches the Hijri date from the Aladhan API.
```py
from hijridate import Hijri

import requests


def get_aladhan_hijri(date_str):
    url = f"http://api.aladhan.com/v1/gToH?date={date_str}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        hijri = data['data']['hijri']
        return f"{int(hijri['day']):02d}-{int(hijri['month']['number']):02d}-{hijri['year']}"
    except requests.exceptions.RequestException:
        return "API Error"
```


## Hijre date 
```py
import datetime
import time
from hijridate import Hijri, Gregorian


def main():
    target_dates = [
        "1425-09-30", "1425-11-30", "1427-08-30", "1427-11-30",
        "1428-09-30", "1428-11-30", "1429-09-30", "1434-09-02",
        "1435-09-02", "1436-12-02", "1437-12-02", "1439-09-02"
    ]

    print("-" * 88)
        
    for h_date_str in target_dates:
        year, month, day = map(int, h_date_str.split('-'))
        base_greg = Hijri(year, month, day).to_gregorian()
        base_date = datetime.date(base_greg.year, base_greg.month, base_greg.day)
        
        # Loop through: -1 (Yesterday), 0 (Target Day), 1 (Tomorrow)
        for delta in [-1, 0, 1]:
            current_date = base_date + datetime.timedelta(days=delta)
            
            gregorian_display = current_date.strftime("%d-%m-%Y")
            
            hijri_obj = Gregorian(current_date.year, current_date.month, current_date.day).to_hijri()
            hijridate_str = f"{hijri_obj.day:02d} {hijri_obj.month:02d} {hijri_obj.year}"
            
            print(f"{gregorian_display:<12} | {hijridate_str:<12} | {get_aladhan_hijri(gregorian_display):<12}")
            
            time.sleep(0.1)
            
        # Separator for the next date block
        print("-" * 88)
```


## Aladhan endpoints
```md
# Gregorian to Hijri date (method=Umm al-Qura)
http://api.aladhan.com/v1/gToH/18-04-2026?calendarMethod=UAQ
http://api.aladhan.com/v1/gToH/19-04-2026?calendarMethod=UAQ


# Hijri to Gregorian date (method=Umm al-Qura)
http://api.aladhan.com/v1/hToG/29-09-1425?calendarMethod=UAQ
http://api.aladhan.com/v1/hToG/30-09-1425?calendarMethod=UAQ
http://api.aladhan.com/v1/hToG/01-10-1425?calendarMethod=UAQ
```

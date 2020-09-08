[cron schedule expressions](https://crontab.guru/)


## show crontabs are currently running
```bash
crontab -l
```

## edit crontabs list 
```bash
crontab -e
```



## run every minute
```bash
* * * * * /bin/execute/this/script.sh

# minute (from 0 to 59)
# hour (from 0 to 23)
# day of month (from 1 to 31)
# month (from 1 to 12)
# day of week (from 0 to 6) (0=Sunday)
```


## examples
```bash
* * * * * echo $(date) >> ~/my-cron.txt
```


```bash
# last minute of the year
59 23 31 12 6 /bin/execute/this/script.sh

# run every Friday 1AM
0 1 * * 5 /bin/execute/this/script.sh

# run on workdays 1AM
0 1 * * 1-5 /bin/execute/this/script.sh

# run 10 past after every hour on the 1st of every month
10 * 1 * * /bin/execute/this/script.sh

# run every 10 minutes
0,10,20,30,40,50 * * * * /bin/execute/this/script.sh
# or
*/10 * * * * /bin/execute/this/script.sh
```


```bash
@reboot     # Run once, at startup
@yearly     # Run once  a year     "0 0 1 1 *"
@annually   # (same as  @yearly)
@monthly    # Run once  a month    "0 0 1 * *"
@weekly     # Run once  a week     "0 0 * * 0"
@daily      # Run once  a day      "0 0 * * *"
@midnight   # (same as  @daily)
@hourly     # Run once  an hour    "0 * * * *"
```


## save output in separate logfile
```bash
*/10 * * * * /bin/execute/this/script.sh >> /var/log/script_output.log 2>&1

# 2>&1 means store errors in messages as well
# > will overwrite the file
# >> will append to the file
```

## Mailing the crontab output
```bash
MAILTO="yourname@yourdomain.com"
```

## Trashing the crontab output
```bash
*/10 * * * * /bin/execute/this/script.sh > /dev/null 2>&1

# /dev/null is the black hole
```

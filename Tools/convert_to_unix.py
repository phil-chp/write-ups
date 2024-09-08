import datetime
import time

date_time_str = '2022:07:19 13:14:48+02:00'
date_time_obj = datetime.datetime.strptime(date_time_str, '%Y:%m:%d %H:%M:%S%z')
unix_timestamp = int(date_time_obj.timestamp())
print(unix_timestamp)

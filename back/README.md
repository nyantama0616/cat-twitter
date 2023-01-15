##### How to use
start mysql server and create database named by "cat-twitter".

``` shell
$ python3 -m venv env
$ . venv/bin/activate
$ pip3 install -r requrements.txt
$ python3 init_db.py
$ uvicorn main:app --reload 
```

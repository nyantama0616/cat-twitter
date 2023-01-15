from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String
from db import meta

users = Table(
    'users', meta,
    Column('id', Integer, primary_key=True),
    Column('user_id', String(255)),
    Column('password', String(255)),
)

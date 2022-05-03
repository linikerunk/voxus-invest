from config.db import meta
from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String


users=Table(
    'users', meta,
    Column('id', Integer, primary_key=True),
    Column('login', String(130), unique=True),
    Column('email', String(255), unique=True),
    Column('password', String(255))
),
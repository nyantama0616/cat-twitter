import sys
sys.path.append("/Users/x/Documents/programming/soat/server/venv/lib/python3.10/site-packages")

from sqlalchemy import create_engine, MetaData
import settings

#ローカルでの実行コマンド
mysql_url = f'mysql+pymysql://{settings.mysql_user}@{settings.mysql_host}:{settings.mysql_port}/{settings.mysql_database}'
engine = create_engine(mysql_url)

meta = MetaData()
conn = engine.connect()

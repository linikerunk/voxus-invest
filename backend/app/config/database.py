from sqlalchemy import create_engine, MetaData


engine = create_engine('mysql+pymysql://root@localhost:3306/voxus_invest')
meta=MetaData()
con=engine.connect()
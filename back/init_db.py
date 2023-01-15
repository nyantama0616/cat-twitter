from db import conn

def main():
    conn.execute("""
    CREATE TABLE users (
        user_id varchar(256) NOT NULL PRIMARY KEY,
        password varchar(256)
    )
    """)

    conn.close()

if __name__ == "__main__":
    main()

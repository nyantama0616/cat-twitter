from db import conn

def main():
    conn.execute("""
        DROP TABLE users
    """)

    conn.close()

if __name__ == "__main__":
    main()

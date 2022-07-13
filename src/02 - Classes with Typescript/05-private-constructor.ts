/*
  Private constructors are used when creating Classes that follow the singleton pattern. For example,
  if we have a Database connection class, we don't want to create a new connection to the same user every
  time we need to use the createConnection function, for example.

  To avoid this type of problem, we can create a private constructor. When you create private constructor
  you cannot use the word new outside of the class scope.
*/

class Database {
  private static database: Database;
  
  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  connect(): void {
    console.log(`Connected on ${this.host}, user: ${this.user}, password: ${this.password}`);
  }

  static createConnection(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;

    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const database1 = Database.createConnection('localhost', 'root', '123456');
const database2 = Database.createConnection('localhost', 'root', '123456');

console.log(database1 === database2) // returns true
database1.connect(); // "Connected on localhost, user: root, password: 123456" 
database2.connect(); // "Connected on localhost, user: root, password: 123456" 

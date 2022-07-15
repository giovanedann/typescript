type AccountMongo = {
  _id: string
  name: string
  age: number
}

type AccountAPI = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & { id: string }

/*
  GHere, we picked from Account Mongo, every key, excluding the _id key, and intersected
  the type returned from Pick with the new wanted key id, the result is:

  A good thing from this is: you if you add another key to the AccountMongo type,
  the AccountAPI type will dinamically have the type too

  type AccountAPI = {
    id: string
    name: string
    age: number
  }
*/

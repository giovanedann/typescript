/*
  In TypeScript, the identity of the types doesn't matter, because what matter is the
  value of the attributes passed, so, if we have 2 different types, with the same
  attributes, both of the types work, as the example below:
*/

type User = {
  username: string;
  password: string;
}

type DifferentTypeFromUser = {
  username: string;
  password: string;
}


type userAuthorizationFn = (databaseUser: User, userData: DifferentTypeFromUser) => boolean;

const verifyUser:userAuthorizationFn =  (databaseUser, userData) => {
  const validateUsername = databaseUser.username === userData.username;
  const validatePassword = databaseUser.password === userData.password;
  return validatePassword && validateUsername;
}

const database: DifferentTypeFromUser = { username: 'user', password: 'password' };
const request: User = { username: 'user', password: 'password' };

const loggedIn: boolean = verifyUser(database, request);

console.log(loggedIn);

/*
  As you can see, doesn't matter what type is passed to the parameters of the function,
  because they are the same. Other languages doesn't allow this, because two Classes with
  the same attributes but different names are not the same.
*/

function unionObjects<T, U>(obj1: T, obj2: U): T & U {
  return ({
    ...obj1,
    ...obj2
  });
}

const obj1 = { key1: 1 }
const obj2 = { key2: 'asvbs' }
const union = unionObjects(obj1, obj2);

/*
  Extract -> Constructs a type by extracting from Type all union members that are assignable to Union.

  Exclude -> Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.
*/

type T0 = Extract<"a" | "b" | "c", "a" | "f">; // type t0 = "a"
type T1 = Extract<string | number | (() => void), Function>; // type t1 = () => void


type T2 = Exclude<"a" | "b" | "c", "a">; // type t2 = "b" | "c"
type T3 = Exclude<"a" | "b" | "c", "a" | "b">; // type t3 = "c"
type T4 = Exclude<string | number | (() => void), Function>; // type t4 = string | number

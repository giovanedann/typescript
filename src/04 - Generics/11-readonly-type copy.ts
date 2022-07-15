/*
  Readonly -> Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
*/
export interface Props {
  a?: number;
  b?: string;
}

const obj: Readonly<Props> = { a: 5, b: '2' };

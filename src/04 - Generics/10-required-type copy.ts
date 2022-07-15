/*
  Required -> Constructs a type consisting of all properties of Type set to required. The opposite of Partial.
*/
export interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 }; // works

const obj2: Required<Props> = { a: 5, b: '2' }; // throws an error if any of the props are not passed

export function wrapInObject<T>(value: T): { value: T } {
  return { value };
}

// Primjer korištenja:
// const wrapped = wrapInObject("test"); // { value: string }
// const wrappedNumber = wrapInObject(42); // { value: number }
// const wrappedObject = wrapInObject({ id: 1 }); // { value: { id: number } }

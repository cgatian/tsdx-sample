export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export const test = () => {
  const ary: string[] = [];
  console.log(ary.indexOf('test'));
  var sym = Symbol();
  sym.toString();
};

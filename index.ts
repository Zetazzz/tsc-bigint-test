export function test() {
  const n1 = BigInt(Number.MAX_SAFE_INTEGER) + BigInt("1");
  const n2 = BigInt(Number.MAX_SAFE_INTEGER);
  const nr = n1 + n2;
  console.log(n1.toString());
  console.log(n2.toString());
  console.log(nr.toString());
}

test()
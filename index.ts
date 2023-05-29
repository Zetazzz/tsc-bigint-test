export function test() {
  const n1 = BigInt(Number.MAX_SAFE_INTEGER) + BigInt("1");
  const n2 = BigInt(Number.MAX_SAFE_INTEGER);
  const nr = n1 + n2;
  console.log(n1.toLocaleString());
  console.log(n2.toLocaleString());
  console.log(nr.toLocaleString());
}

test()
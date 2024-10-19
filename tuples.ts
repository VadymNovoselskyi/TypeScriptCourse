const color: [number, number, number] = [0, 255, 0];

// type MyResponse = readonly [number, string];
type MyResponse = [number, string];
const goodRes: MyResponse = [200, 'OK'];
goodRes.push('true');
goodRes.pop();

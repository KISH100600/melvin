console.log("jo");
const data: String = "kish";
let nn: null = null;

const arr: readonly (String | number | Boolean)[] = ["kish", 0, true];

console.log(arr[1]);

const tup: readonly [number, string, string] = [10, "bs", ""];

const userData: { name: String; age: Number; course: String; addrs?: String } =
  {
    name: "kis",
    age: 99,
    course: "ANG",
  };

userData.addrs;

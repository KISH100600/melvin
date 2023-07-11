interface kish {
  name: String;
  age: Number;
  addrs?: String;
  mobile?: Boolean;
}

const obj1: kish = {
  name: "js",
  age: 83,
  addrs: "js",
};
const obj2: kish = { name: "js", age: 83 };

function getTime(P1: String = "ksi"): kish {
  return {
    name: P1,
    age: 83,
    addrs: "js",
  };
}

getTime();

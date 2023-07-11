function getData<S, K>(p1: S, p2: K): [S, K] {
  return [p1, p2];
}

getData<String, Number>("kish", 29);

getData<Number, String>(30, "hsd");

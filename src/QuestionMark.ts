// 01. ? ---> Tarnary Operator
// 02. ?? ---> Nullish Coalesing Operator : null/undifined
// 03. ?. ---> Optional Chaninig


// Used ?
const biyerAge = (age: number) => {
  const result =
    age >= 21
      ? "Biya korte parbay"
      : "Biya korte parbe na , karon tumar age kom ! ";
  console.log(result);
};
biyerAge(28);


// Used ??    ---- null/undifined/ "value"
const userTheme = null;
const defaultTheme = userTheme ?? "light Theme";
console.log(defaultTheme);

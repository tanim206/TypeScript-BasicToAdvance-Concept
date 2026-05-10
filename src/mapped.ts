const arrayOfNumer: number[] = [2, 4, 6, 8];
// const arrayOfString: string[] = ["2", "4", "6","8"];

const arrayOfStringUsingMap: string[] = arrayOfNumer.map((num) =>
  num.toString(),
);

console.log(arrayOfStringUsingMap);

type AreaOfNum = {
  height: number;
  width: number;
};
// type AreaOfString = {
//   height: string;
//   width: string;
// };

// type AreaOfString = {
//   [key in "height" | "width"]: string;
// };
// type AreaOfString = {
//   [key in keyof AreaOfNum]: string;
// };


type Area<T> = {
  [key in keyof T]: T[key];

  // key >> height >> string
  // key >> width >> number
};

/*

T >>>   { height: string; width: number }
  
{  height: string; width: number }['height']: number

*/

//"height" |"width"

const area1: Area<{ height: string; width: boolean }> = {
  height: "50",
  width: false,
};
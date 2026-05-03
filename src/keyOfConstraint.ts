type richMan = {
  bike: string;
  car: string;
  plain: string;
};

type Vehicle1 = "bike" | "car" | "plain";
type Vehicle2 = keyof richMan; // keyof bujanu hoise ai file a

const man : Vehicle2 = {
  bike: "pulser",
  car: "lemborgini",
  plain: "bangladesh",
};
// console.log(man);

type User = {
  id: number;
  name: string;
  phone: string;
  bike: boolean;
};

const user: User = {
  id: 121,
  name: "tanim",
  phone: "017545645664",
  bike: true,
};

const getPropertyOfObject = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const result = getPropertyOfObject(user, "phone");

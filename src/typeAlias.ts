type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  gender: "male" | "female";
};

const user1: User = {
  id: 676602,
  name: {
    firstName: "Tanim",
    lastName: "Hossan",
  },
  email: "tanim@gmail.com",
  gender: "male",
};

console.log(user1);

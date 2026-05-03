

type moreInfo = {
    id: number;
    name: string;
    phone: number;
    mobile: boolean;
  }
const ProDeveolper = <
  T extends moreInfo,    // extents part bujanu hoise ai file a 
>(
  studentInfo: T,
) => {
  return {
    Deveolper: "Yes",
    ...studentInfo,
  };
};

const student1 = {
  id: 323,
  name: "TANIM",
  Developer: true,
};
const student2 = {
  id: 323,
  name: "JOY DAS",
  Developer: true,
  AppDeveloper: true,
  isMarried: false,
  phone: 1232323,
  mobile: true,
};

const result = ProDeveolper(student2);
console.log(result);

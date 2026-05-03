// Array
const friends = ["Asif", "Rakib"];
const SchoolFriends = ["Tareq", "Saiful", "Aziz"];
const collageFriends = ["Mahdi", "Showrav", "Ujjal", "Deep"];

// ( ... )  ----> Spread Oparetor

friends.push(...SchoolFriends);

// console.log(friends);

// Object

const userFristInfo = {
  name: "Tanim",
  email: "tanim@gamil.com",
};
const userSecondInfo = {
  phone: "01646471206",
  address: "Gujarai, sylhet",
};
const userFinalInfo = { ...userFristInfo, ...userSecondInfo };

console.log(userFinalInfo);

// Rest Operator

const myMarridsendInvitation = (...friends: string[]) => {
  const invitationFriends = friends.forEach((friend) =>
    console.log(`sent to invitation ${friend}`),
  );
  return invitationFriends;
};
myMarridsendInvitation("Mahdi", "Showrav", "Ujjal", "Deep");

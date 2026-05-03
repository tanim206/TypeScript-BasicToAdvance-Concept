interface Developer<T, X = null> {
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
  salary: number;
  device: T;
  bike?: X;
}

interface DeviceDetails {
  ram: "4GB" | " *GB";
  Quality: boolean;
}

const myInformation: Developer<DeviceDetails> = {
  name: {
    firstName: "Tanim",
    lastName: "Hossan",
  },
  age: 21,
  salary: 21000,
  device: {
    ram: "4GB",
    Quality: true,
  },
  bike: null,
};

console.log(myInformation);

type RichManVehicle = {
  bike: string;
  car: string;
  ship: string;
};

type CheckVehicle<T> = T extends keyof RichManVehicle ? true : false; // keyof mane otova bujanu hoise

type HasBike = CheckVehicle<"bike">;

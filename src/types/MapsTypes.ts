export type MapsCoordinate = {
  latitude: number;
  Longitude: number;
};

export type PublicFacility = {
  id: number;
  name: string;
  icon?: string;
  location: MapsCoordinate;
  phone_number: string;
  officer_name?: string;
  officer_rank?: string;
};

export type MapsType = {
  name: string;
  type: string;
  icon: string;
  data: PublicFacility[];
};

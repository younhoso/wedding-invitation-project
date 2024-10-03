type Location = {
  lat: number;
  lng: number;
  name: string;
  address: string;
  link: string;
  waytocome: {
    metro: string[];
    bus: string[];
  };
};

export type Account = {
  bankName: string;
  accountNumber: string;
};

export type Person = {
  name: string;
  phoneNumber: string;
  account: Account;
};

export type Wedding = {
  data: {
    id: number;
    date: string;
    location: Location;

    message: {
      intro: string;
      invitation: string;
    };
    galleryImages: string[];
    attendCount: number;

    groom: Person & { parents: Person[] };
    bride: Person & { parents: Person[] };
  };
};

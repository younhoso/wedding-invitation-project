export type Location = {
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
  kakaopayLink?: string;
};

export type Person = {
  name: string;
  phoneNumber: string;
  account: Account;
};

export interface Wedding {
  data: {
    id: number;
    date: string;
    location: Location;
    groom: Person & { parents: Person[] };
    bride: Person & { parents: Person[] };
    message: {
      intro: string;
      invitation: string;
    };
    galleryImages: string[];
    attendCount: number;
  };
}

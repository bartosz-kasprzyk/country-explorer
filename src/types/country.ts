export interface Country {
  flags: {
    svg: string;
  };
  name: {
    common: string;
  };
  cca3: string;
  region: string;
}

export interface CountryDetails extends Country {
  capital?: string[];
  population: number;
  languages?: { [key: string]: string };
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  borders?: string[];
}

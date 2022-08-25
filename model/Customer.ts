export interface Customer {
  id: string;
  properties: {
    name: string;
    tel: string;
    notes: string;
  };
  relations: {
    source: string;
  };
}

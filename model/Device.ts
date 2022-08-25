export interface Device {
  id: string;
  properties: {
    name?: string;
    location?: string;
  };
  relations: {
    customerId: string;
  };
}

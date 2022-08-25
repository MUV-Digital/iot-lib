export interface Device {
  id: string;
  properties: {
    name?: string;
  };
  relations: {
    customerId: string;
  };
}

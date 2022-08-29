export interface Sensor {
  id: string;
  properties: {
    data: {
      value: number | boolean;
    };
    enabled: boolean;
    type: string;
    unit: string;
  };
  relations: {
    deviceId: string;
  };
}

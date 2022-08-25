export interface Sensor {
  id: string;
  properties: {
    data: {
      value: number | string;
    };
    enabled: boolean;
    type: string;
    unit: string;
  };
  relations: {
    deviceId: string;
  };
}

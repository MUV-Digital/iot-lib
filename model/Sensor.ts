import { SensorType } from './SensorType';
export interface Sensor {
  id: string;
  properties: {
    data: {
      value: number | boolean;
    };
    enabled: boolean;
    type: SensorType;
    unit: string;
    displayName: string;
  };
  relations: {
    deviceId: string;
  };
}

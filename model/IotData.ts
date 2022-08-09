import { SensorData } from './SensorData';

export type IotData = {
  meta: {
    tenantId: string;
    deviceId: string;
  };
  data: Array<SensorData>;
};

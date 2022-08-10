import { SensorConfig } from './SensorConfig';

export type IotConfig = {
  meta: {
    tenantId: string;
    deviceId: string;
  };
  sensors: Array<SensorConfig>;
};

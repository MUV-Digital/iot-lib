import { SensorConfig } from './SensorConfig';
import { StateConfig } from './StateConfig';

export type IotConfig = {
  meta: {
    tenantId: string;
    deviceId: string;
  };
  sensors: Array<SensorConfig>;
  states: Array<StateConfig>;
};

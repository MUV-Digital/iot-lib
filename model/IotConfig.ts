import { SensorConfig } from './SensorConfig';
import { StateData } from './StateData';

export type IotConfig = {
  meta: {
    tenantId: string;
    deviceId: string;
  };
  sensors: Array<SensorConfig>;
  states: Array<StateData>;
};

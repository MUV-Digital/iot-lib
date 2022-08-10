import { SensorData } from './SensorData';
import { StateData } from './StateData';

export type TelemetryData = {
  meta: {
    tenantId: string;
    deviceId: string;
  };
  data: Array<SensorData>;
};

export type DeviceData = {
  meta: {
    tenantId: string;
    deviceId: string;
  };
  data: StateData;
};

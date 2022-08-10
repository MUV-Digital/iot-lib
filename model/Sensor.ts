import { Gobject } from './Gobject';
import { SensorData } from './SensorData';
import { SensorType } from './SensorType';

export type Sensor = Gobject<Property, Relation>;

interface Property {
  type: SensorType;
  unit: string;
  data?: SensorData;
  enabled: boolean;
}

interface Relation {}

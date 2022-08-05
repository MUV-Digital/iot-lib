import { Gobject } from './Gobject';
import { PointType } from './PointType';

export type Sensor = Gobject<Property, Relation>;

interface Property {
  type: PointType;
  unit: string;
  value: number | boolean;
  timestamp: number;
}

interface Relation {}

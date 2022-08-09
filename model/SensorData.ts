import { Gobject } from './Gobject';

export type SensorData = Gobject<Property, Relation>;

interface Property {
  value: number | boolean;
  timestamp: number;
}

interface Relation {}

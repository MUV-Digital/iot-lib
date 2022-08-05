import { Gobject } from './Gobject';

export type Device = Gobject<Property, Relation>;

interface Property {
  balenaUuid: string;
  balenaId: number;
}

interface Relation {
  registeredSensors: string[];
  registeredStates: string[];
}

import { Gobject } from './Gobject';

export type Device = Gobject<Property, Relation>;

interface Property {}

interface Relation {
  registeredSensors: string[];
  registeredStates: string[];
}

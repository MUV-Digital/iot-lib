import { Gobject } from './Gobject';

export type StateRule = Gobject<Property, Relation>;

interface Property {
  actions?: Array<Action>;
}

interface Relation {}

interface Action {
  to: Array<string>;
  type: string;
}

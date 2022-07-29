import { Gobject } from './Gobject';

export type TenantIdentity = Gobject<Property, Relation>;

interface Property {
  displayName: string;
}

interface Relation {
  registeredDevices: string[];
}

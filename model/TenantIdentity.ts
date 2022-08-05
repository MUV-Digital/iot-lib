import { Gobject } from './Gobject';

export type TenantIdentity = Gobject<Property, Relation>;

interface Property {
  displayName?: string;
  balenaUuid: string;
}

interface Relation {
  registeredDevices: string[];
}

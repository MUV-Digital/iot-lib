export interface State {
  id: string;
  properties: {
    actions: Action[];
  };
  relations: {
    deviceId: string;
  };
}

export interface Action {
  to: Array<string>;
  type: string;
}

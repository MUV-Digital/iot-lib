export interface State {
  id: string;
  properties: {
    action: Action;
  };
  relations: {
    deviceId: string;
  };
}

export interface Action {
  to: Array<string>;
  type: string;
}

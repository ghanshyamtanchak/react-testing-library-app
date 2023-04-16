export interface ITodo {
  id: string;
  task: string;
  completed: boolean;
}

export interface IFollower {
  login: {
    username: string;
  };
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
}

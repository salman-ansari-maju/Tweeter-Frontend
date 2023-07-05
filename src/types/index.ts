export type TUser = {
  id: number;
  name: string;
  isFollow: boolean;
  isCurrentUser: boolean;
  Content: TPost[];
};

export type TPost = {
  id: number;
  content: string;
};

export type TUserf = {
  id: number;
  name: string;
  isFollow: boolean;
  fun: void;
};

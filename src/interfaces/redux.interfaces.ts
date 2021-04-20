import { IComment } from "./comment.interfaces";

export interface ICommentState {
  comments: IComment[];
  userGeneratedComments: IComment[];
}

export interface IAction {
  type: string;
  payload: any;
}

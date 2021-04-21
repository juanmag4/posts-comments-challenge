import { IComment } from "./comment.interfaces";
import { IPost } from "./posts.interfaces";

export interface ICommentState {
  comments: IComment[];
  userGeneratedComments: IComment[];
  loading: boolean;
}

export interface IPostsState {
  posts: IPost[];
  loading: boolean;
}

export interface Store {
  posts: IPostsState;
  comments: ICommentState;
}

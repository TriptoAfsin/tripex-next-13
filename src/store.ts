import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import rootReducer from "./redux/rootReducer";
import { useDispatch } from "react-redux";


export const store = configureStore({
  reducer: rootReducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
export const useAppDispatch: () => AppDispatch = useDispatch;

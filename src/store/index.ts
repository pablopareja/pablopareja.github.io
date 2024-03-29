import common from "@/store/common/slice";
import language from "@/store/language/slice";
import type { ReducersMapObject } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const staticReducers = {
  language,
  common,
};

const asyncReducers = {};

const createReducer = (reducers: ReducersMapObject) =>
  combineReducers({
    ...staticReducers,
    ...reducers,
  });

const store = configureStore({
  reducer: createReducer(asyncReducers),
  devTools: process.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

import { configureStore } from '@reduxjs/toolkit'
import MainReducer from './features/MainReducer'
// ...

export const store = configureStore({
  reducer: {
    users: MainReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
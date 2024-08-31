import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./store/users";
import coursesReducer from "./store/courses";
import basketReducer from "./store/basket";

export default configureStore({
  reducer: {
    users: usersReducer,
    courses: coursesReducer,
    basket: basketReducer,
  },
});

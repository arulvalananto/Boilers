import { configureStore } from "@reduxjs/toolkit";

import sampleReducer from "./reducers/sample";

const store = configureStore({
  reducer: {
    sample: sampleReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]), // ⬅️ add any middleware like logger here
});

export default store;

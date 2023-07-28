import { createAction } from "@reduxjs/toolkit";

export const setAccessToken = createAction("SET_ACCESS_TOKEN", (token) => ({
  payload: token,
}));
export const setName = createAction("SET_NAME");
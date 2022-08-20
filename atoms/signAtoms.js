import { atom } from "recoil";

export const signupState = atom({
  key: "signupState",
  default: false,
});

export const loginState = atom({
  key: "loginState",
  default: false,
});

export const resetPasswordState = atom({
  key: "resetPasswordState",
  default: false,
});

export const writePostState = atom({
  key: "writePostState",
  default: false,
});

export const postViewState = atom({
  key: "postViewState",
  default: false,
});

export const deletePostState = atom({
  key: "deletePostState",
  default: false,
});

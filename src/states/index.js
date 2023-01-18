import { atom } from "recoil";

export const LinkInputState = atom({
  key: "LinkInputState",
  default: "",
});

export const BoundingBoxState = atom({
  key: "BoundingBoxState",
  default: {}
})

export const SignInState = atom({
  key: "SignInState",
  default: false
})

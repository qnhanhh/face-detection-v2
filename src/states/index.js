import { atom, selector } from "recoil";

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

export const UserState = atom({
  key: 'UserState',
  default: {
    id: '',
    name: '',
    email: '',
    password: '',
    entries: 0,
    joined: ''
  }
})

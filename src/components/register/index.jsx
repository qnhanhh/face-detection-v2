import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { UserState } from "../../states";

const Register = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(UserState);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitRegister = () => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user) {
          setUser(user);
          navigate("/");
        }
      });
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="bg-black/30 m-auto shadow-xl rounded px-8 pt-6 pb-6">
        <h1 className="mb-4 text-2xl font-bold text-black md:text-3xl lg:text-5xl">
          Register
        </h1>
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            onChange={onNameChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            onChange={onEmailChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            onChange={onPasswordChange}
          />
        </div>
        <div className="flex flex-col items-center justify-between">
          <button
            className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onSubmitRegister}
          >
            Register
          </button>
          <Link
            className="align-baseline font-bold text-md text-black hover:text-white mt-4"
            to="/signin"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

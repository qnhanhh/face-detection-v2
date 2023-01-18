import { Form, Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <form
        className="bg-black/30 m-auto shadow-xl rounded px-8 pt-6 pb-6"
      >
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
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
          />
        </div>
        <div className="flex flex-col items-center justify-between">
          <button
            className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
          <a
            className="align-baseline font-bold text-md text-black hover:text-white mt-4"
            href="/signin"
          >
            Sign In
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const googleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  }

  const githubLogin = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  }

  const handleChange = (e, setChange) => {
    setChange(e.target.value);
  };

  return (
    <div className="h-[70%] w-[90%] mx-auto">
      <h1 className="text-center font-bold mb-10">Choose Login Method</h1>

      {/* divide login method into two parts: 
            login with social networks and login with mail and password */}
      <div className="grid gap-4 grid-rows-1 md:grid-cols-3">
        <div className="flex flex-col justify-between">

          <div  className="basis"onClick={ googleLogin }>
            <FcGoogle className="" />
          </div>
          
          <div  className="basis"onClick={ githubLogin }>
            <FaGithub className="" />
          </div>

          <div className="basis">
            <FaFacebook className="" />
          </div>

        </div>

        <div className="flex items-center relative md:none">
          <div className="md:none absolute w-[0.5px] h-full bg-slate-600 top-0 bottom-0 left-0 right-0 m-auto z-[-1]"></div>
          <div className="w-[100%]  h-fit">
            <p className="w-fit mx-auto bg-slate-300 rounded-full p-2 border border-slate-600">OR</p>
          </div>
        </div>

        <div>
          <form className="flex flex-col gap-4">
            <input
              className="px-3 py-1 border border-slate-300 rounded-lg"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setChange(e, setEmail)}
              placeholder="Email"
            />
            <input
              className="px-3 py-1 border border-slate-300 rounded-lg"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setChange(e, setPassword)}
              placeholder="Password"
            />
            <button className="bg-slate-300 rounded-lg py-2 text-white font-bold hover:bg-white hover:border hover:border-slate-300 hover:text-slate-300" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

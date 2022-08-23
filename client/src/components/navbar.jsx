import { NavLink } from "react-router-dom";

export const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  }

  return (
    <nav className="flex justify-between align-center mt-3 mx-2">
      <span>
        <NavLink to="/" className="text-blue no-underline pointer font-bold uppercase">Logo</NavLink>
      </span>
      {
        user ? (
          <ul className="min-w-[30%] flex justify-between">
        <li className="pointer">
          <img src={ user.photos[0].value } alt="" />
        </li>
        <li className="pointer">{ user.displayName }</li>
        <li className="pointer" onClick={ logout }>Logout</li>
      </ul>
        ) : (
          <NavLink to="/login" className="text-slate-700 border border-slate-700 rounded-lg px-4 py-2 hover:text-white  hover:bg-slate-700 hover:border-white">Login</NavLink>
        )
      }
      
    </nav>
  );
};

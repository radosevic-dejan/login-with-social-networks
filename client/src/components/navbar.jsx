import { NavLink } from "react-router-dom";

export const Navbar = ({ user }) => {
  return (
    <nav className="flex justify-between align-center">
      <span>
        <NavLink to="/" className="text-blue no-underline pointer">Logo</NavLink>
      </span>
      {
        user ? (
          <ul className="min-w-[30%] flex justify-between">
        <li className="pointer">
          <img src="#" alt="" />
        </li>
        <li className="pointer">Full Name</li>
        <li className="pointer">Logout</li>
      </ul>
        ) : (
          <NavLink to="/login" className="btn btn-blue">Login</NavLink>
        )
      }
      
    </nav>
  );
};

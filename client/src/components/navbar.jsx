import { NavLink } from "react-router-dom";

export const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  }

  return (
    <nav className="flex justify-between align-center">
      <span>
        <NavLink to="/" className="text-blue no-underline pointer">Logo</NavLink>
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
          <NavLink to="/login" className="btn btn-blue">Login</NavLink>
        )
      }
      
    </nav>
  );
};

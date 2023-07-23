import { Link } from "react-router-dom";

const Header = () => {
  const navItem = (
    <>
      <li>
        <Link to="/" className=" no-underline  font-bold text-base-200">
          Home
        </Link>
      </li>
      <li>
        <Link to="/college" className=" no-underline  font-bold text-white">
          Colleges
        </Link>
      </li>
      <li>
        <Link to="/Admission" className=" no-underline  font-bold text-white">
          Admission
        </Link>
      </li>
      <li>
        <Link to="/My College" className=" no-underline  font-bold text-white">
          My College
        </Link>
      </li>
      <Link to="/login">
        <button className="btn btn-outline text-white">LogIn</button>
      </Link>
    </>
  );

  return (
    <div className="navbar h-1  bg-black text-rose-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn  lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-5 p-2 font-bold shadow-xl bg-black text-white rounded-box"
          >
            {navItem}
          </ul>
        </div>

        <>
          <Link
            to="/"
            className=" no-underline items-center text-xl font-bold"
          ></Link>
          Collage <span className="text-yellow-500">Booker</span>
        </>
      </div>
      <>
        <input className=" w-5/12 h-8" type="search" />
      </>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">Profile</div>
    </div>
  );
};

export default Header;

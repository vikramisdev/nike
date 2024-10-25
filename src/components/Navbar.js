import SearchIcon from "@mui/icons-material/Search";
import "../App.css";
import { Drawer, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import Logo from "./NikeLogo";
import NikeLogo from "./NikeLogo";
import JordanLogo from "./JordanLogo";
import {
  Menu,
  Favorite,
  FavoriteBorder,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import NewAndFeaturedMenu from "./NewAndFeaturedMenu";

function Navbar() {
  const [drawerOpen, setDrawerState] = useState(false);
  const [footerHeight, setFooterHeight] = useState("0rem"); // Initial height
  const [navbarFooterChild, setNavbarFooterChild] = useState(null);

  // Function to increase footer height
  const handleMouseOver = (name) => {
    setFooterHeight("20rem");
    if (name === "NewAndFeatured") {
      setNavbarFooterChild(<NewAndFeaturedMenu />);
    }
  };

  // Function to reset footer height
  const handleMouseOut = () => {
    setFooterHeight("0rem");
    setNavbarFooterChild(null);
  };

  return (
    <div>
      <div className="md:px-12 py-1 md:flex justify-between bg-slate-50 hidden">
        <Link to={"/jordan"}>
          <JordanLogo />
        </Link>
        <div className="flex gap-2 items-center">
          <Link to={"/retail"}>
            <li className="text-xs font-semibold">Find a Store</li>
          </Link>
          <hr className="w-3 rotate-90 border-t-black"></hr>

          <Link to={"/help"}>
            <li className="text-xs font-semibold">Help</li>
          </Link>

          <hr className="w-3 rotate-90 border-t-black"></hr>

          <Link to={"/membership"}>
            <li className="text-xs font-semibold">Join Us</li>
          </Link>

          <hr className="w-3 rotate-90 border-t-black"></hr>

          <Link to={"/signin"}>
            <li className="text-xs font-semibold">Sign In</li>
          </Link>
        </div>
      </div>

      <div className="w-full md:px-10 px-5 flex justify-between items-center">
        <Link to={""}>
          <NikeLogo className="cursor-pointer py-4 " />
        </Link>
        <div className="md:flex md:gap-60">
          <div className="md:flex items-center py-4 hidden">
            <li
              className="font-semibold cursor-pointer hover:border-b-2 hover:border-b-black text-md px-2 py-1"
              onMouseOver={() => handleMouseOver("NewAndFeatured")}
              onMouseOut={handleMouseOut}
            >
              New & Featured
            </li>
            <li
              className="font-semibold cursor-pointer hover:border-b-2 hover:border-b-black text-md px-2 py-1"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Men
            </li>
            <li
              className="font-semibold cursor-pointer hover:border-b-2 hover:border-b-black text-md px-2 py-1"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Women
            </li>
            <li
              className="font-semibold cursor-pointer hover:border-b-2 hover:border-b-black text-md px-2 py-1"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Kids
            </li>
            <li
              className="font-semibold cursor-pointer hover:border-b-2 hover:border-b-black text-md px-2 py-1"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Customise
            </li>
            <li
              className="font-semibold cursor-pointer hover:border-b-2 hover:border-b-black text-md px-2 py-1"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              SNKRS
            </li>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-slate-50 flex items-center gap-2 md:px-3 md:py-2 p-2 rounded-full">
              <SearchIcon className="cursor-pointer" />
              <input
                className="bg-slate-50 w-28 border-none outline-none hidden md:block"
                type="text"
                placeholder="Search"
              ></input>
            </div>
            <Link to={"/favorite"}>
              <FavoriteBorder className="cursor-pointer" />
            </Link>
            <Link to={"/cart"}>
              <ShoppingBagOutlined className="cursor-pointer" />
            </Link>
            <Link to={""} className="md:hidden">
              <Menu className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer with dynamic height */}
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        id="navbar-footer"
        className="bg-white w-full absolute transition-all duration-300 flex justify-center items-center"
        style={{ height: footerHeight }}
      >
        {navbarFooterChild}
      </div>

      {/* sliding offers section */}
      <div className="flex w-full bg-slate-50 py-3 justify-start text-center overflow-x-scroll no-scrollbar">
        <div className="w-full flex justify-start animate-slide delay-1000">
          <div className="min-w-full">
            <h1 className="text-semibold text-md pb-1 ">
              New Styles On Sale: Up To 40% Off
            </h1>
            <a href="https://">
              <p className="text-sm underline font-semibold">
                Shop All Our New Markdowns
              </p>
            </a>
          </div>

          <div className="min-w-full">
            <h1 className="text-semibold text-md pb-1">
              Big Offers Upto 20$ Off
            </h1>
            <a href="https://">
              <p className="text-sm underline font-semibold">
                Save & Shop Freely
              </p>
            </a>
          </div>

          <div className="min-w-full">
            <h1 className="text-semibold text-md pb-1">
              Huge Collection of Shoes
            </h1>
            <a href="https://">
              <p className="text-sm underline font-semibold">
                Available To Every Store
              </p>
            </a>
          </div>

          <div className="min-w-full">
            <h1 className="text-semibold text-md pb-1">
              Buy 1 Get One Free
            </h1>
            <a href="https://">
              <p className="text-sm underline font-semibold">
                Dont Miss The Chance !
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../../../assets/book.svg";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image src={img} alt="" height={35} width={40} />
          <span className="font-bold ml-2 text-primary">Blog Book</span>
        </div>
      </Link>
      <ul className="flex items-center">
        <li>
          <a href="#" className="mr-6 font-medium text-gray-600">
            Products
          </a>
          <a href="#" className="mr-6 font-medium text-gray-600">
            Pricing
          </a>
          <a href="#" className="mr-6 font-medium text-gray-600">
            Docs
          </a>
          <a href="#" className="mr-6 font-medium text-gray-600">
            Company
          </a>
        </li>
      </ul>
      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <a href="#" className="hover:text-gray-400">
            Login
          </a>
        </li>
        <li className=" font-medium text-gray-600 flex items-center">
          <a
            href="#"
            className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all"
          >
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

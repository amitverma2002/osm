
  import './index.css'// src/components/Navbar.tsx
  // import React from 'react';
  import img1 from './assets/flipkart logo.png'
  import { FaSearch, FaShoppingCart } from 'react-icons/fa';
  import Product from "./product.tsx"
  import Ads from "./ads.tsx"
  import Sales from "./sales.tsx"
  import Poster from "./poster.tsx"
  // import { useSearchParams } from 'react-router';




  const Navbar= () => {


    
  // const [searchParams, setSearchParams] = useSearchParams();

  //   const category = searchParams.get("name");

    return (
      <>
      <nav className="bg-blue-600 text-white px-4 py-2 flex items-center justify-between w-full">
        <div className="flex items-center space-x-1">
          <img src={img1} alt="img1"  className='w-[100px]'/>
          <span className="text-xs text-yellow-300 mt-2">Explore&nbsp;
            <span className="font-semibold text-white">Plus</span>
          </span>
        </div>
        <div className="flex-grow max-w-[600px] mx-4 hidden md:flex">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full px-4 py-2 rounded-l-sm text-black focus:outline-none bg-white"
          />
          <button className="bg-white text-blue-600 px-4 py-2 rounded-r-sm">
            <FaSearch/>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-blue-600 px-4 py-1 rounded-sm font-medium">
            Login
          </button>
          <span className="hidden md:inline cursor-pointer font-medium">
            Become a Seller
          </span>
          <span className="hidden md:inline cursor-pointer font-medium">
            More
          </span>
          <div className="relative flex items-center">
  <FaShoppingCart />
  <span className="ml-1" >Cart</span>
</div>
        </div>
      </nav>
        <Product/>
        <Ads/>
        <Sales/>
        <Poster/>

      </>
    );

  };

  export default Navbar;

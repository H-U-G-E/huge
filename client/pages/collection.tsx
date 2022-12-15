import React from "react";
import Link from "next/link";
import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { color } from "@cloudinary/url-gen/qualifiers/background";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// library.add(fas)

const collection = () => {
  // const [open, setOpen] = useState<boolean>(false);
  // const [kopen, setkOpen] = useState<boolean>(false);
  // const dropdownRef = useRef<HTMLDivElement>(null);
  // const handleDropDownFocus = (state: boolean) => {
  //   setOpen(!state);
  // };
  // const handleClickOutsideDropdown = (e: any) => {
  //   if (typeof window !== "undefined") {
  //     if (open && !dropdownRef.current?.contains(e.target as Node)) {
  //       setOpen(false);
  //     }
  //   }
  //   window.addEventListener("click", handleClickOutsideDropdown);
  //   console.log(open);
  // };

  return (
    <div>
      <nav
        className="relative flex h-12 items-center px-4 justify-between shadow-md dark:shadow-gray-700"
        style={{ height: "70px" }}
      >
        <img
          src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670936284/1_rdfnhm.png"
          className="logo"
          style={{ width: "200px", height: "170px" }}
          alt=""
        />

        <div>
          <Link href="/home" className="p-2 text-dark no-underline hover:underline">
            Home
          </Link>
          <Link href="/collection" className="p-2 text-dark no-underline hover:underline">
            Collection
          </Link>

          <Link href="/store" className="p-2 text-dark no-underline hover:underline">
            Store
          </Link>
          <Link href="/cart" className="p-2 text-dark no-underline hover:underline">
            cart
          </Link>
          <Link href="/aboutus" className="p-2 text-dark no-underline hover:underline">
            About us
          </Link>
          <Link href="/login" className="p-2 text-dark no-underline hover:underline">
            Login
          </Link>
        </div>
      </nav>
      <center>
      <input type="text" placeholder="Search.."></input>
</center>
<div className="h-175 d-flex align-items-center justify-content-center" >
      <div className='row align-items-center'>
      
      <div className='col'>
      <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">BLACK FRIDAY SALE</h1>
<h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">UP TO 90% OFF</h1>
<h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">WELCOME!</h1>

        </div> 
      <div className="col">
      <img src="https://octanecdn.com/forevervetscom/forevervetscom_679279103.gif" alt="" />
    </div>
    
      </div>
      </div>
      <div>
        <div className="row justify-content-center">
          {/* <div className="col-2 flex items-baseline" id="yes">
            <div className="app-drop-down-container" ref={dropdownRef}>
              <button
                style={{ background: "" }}
                onClick={(e) => handleDropDownFocus(open)}
              >
                Categories
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>

              {open && (
                <ul>
                  <li>coats&jackets</li>
                  <li>sweaters&hoodies</li>
                  <li>shirts&dresses</li>
                  <li>accessories</li>
                </ul>
              )}
            </div>
          </div> */}
          {/* <div className="col-2" id="no">
            <div className="app-drop-down-container" ref={dropdownRef}>
              <button
                style={{ background: "" }}
                onClick={(e) => handleDropDownFocus(kopen)}
              >
                Type
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>

              {kopen && (
                <ul>
                  <li>cats</li>
                  <li>dogs</li>
                  <li>kittens</li>
                  <li>puppies</li>
                </ul>
              )}
            </div>
          </div> */}
          {/* <div className="col-2"> come on</div> */}
          <div className="col-4">
            <div className=" animate-box" data-animate-effect="fadeInRight">
              <div>
                <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4 font-serif text-base italic font-semibold rounded-full" >
                  Pets
                </div>
              </div>
              <div className="clearfix" />
              <div className="fh5co_tags_all">
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                >
                  cats
                </button>
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                >
                  dogs
                </button>
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                >
                  kittens
                </button>
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                >
                  puppies
                </button>
              </div>
              <div></div>
            </div>
          </div>
          <div className="col-4">
            <div className=" animate-box" data-animate-effect="fadeInRight">
              <div>
                <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4 font-serif text-base italic font-semibold rounded-full ">
                  Categories
                </div>
              </div>
              <div className="clearfix" />
              <div className="fh5co_tags_all">
              <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                >
                  coats&jackets
                </button>
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                >
                  sweaters&hoodies
                </button>
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                >
                  shirts&dresses
                </button>
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                >
                
                  accessories
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>



      <div className="container">
       <div className="row">
        <div className="col">
{/* hne tabda l main */}
<a href="#" className="relative block overflow-hidden group" style={{ width: "336px", height: "216" }}>
  <button
    className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

  <img
    src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1671014091/D%20and%20C/do-cats-like-wearing-clothes_ombbup.jpg"
    alt=""
    className="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
    style={{ width: "336px", height: "216" }}
  />

  <div className="relative p-6 bg-white border border-gray-100">
    <span
      className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
    >
      New
    </span>

    <h3 className="mt-4 text-lg font-medium text-gray-900">product name</h3>

    <p className="mt-1.5 text-sm text-gray-700">Price</p>

    <form className="mt-4">
      <button
        className="block w-full p-4 text-sm font-medium transition bg-yellow-400 rounded hover:scale-105 bg-black "
      >
        Add to Cart
      </button>
    </form>
  </div>
</a>
{/* hne toufa */}
        </div>
        <div className="col order-12">
{/* hne tabda l main */}
<a href="#" className="relative block overflow-hidden group" style={{ width: "336px", height: "216" }}>
  <button
    className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

  <img
    src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1671012433/D%20and%20C/51NGakNGYuL._AC__d9krgi.jpg"
    alt=""
    className="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
    style={{ width: "336px", height: "216" }}
  />

  <div className="relative p-6 bg-white border border-gray-100">
    <span
      className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
    >
      New
    </span>

    <h3 className="mt-4 text-lg font-medium text-gray-900">product name</h3>

    <p className="mt-1.5 text-sm text-gray-700">Price</p>

    <form className="mt-4">
      <button
        className="block w-full p-4 text-sm font-medium transition bg-yellow-400 rounded hover:scale-105"
      >
        Add to Cart
      </button>
    </form>
  </div>
</a>
{/* hne toufa */}
          
        </div>
      
        <div className="col order-1">
          
{/* hne tabda l main */}
<a href="#" className="relative block overflow-hidden group" style={{ width: "336px", height: "216" }}>
  <button
    className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

  <img
    src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1671013861/D%20and%20C/c90b0e81-2de2-432d-8e71-074c78e0b2fb.cc8fc55e344fec68f1df2c8028a71e54_xx2elr.jpg"
    alt=""
    className="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
    style={{ width: "336px", height: "216" }}
  />

  <div className="relative p-6 bg-white border border-gray-100">
    <span
      className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
    >
      New
    </span>

    <h3 className="mt-4 text-lg font-medium text-gray-900">product name</h3>

    <p className="mt-1.5 text-sm text-gray-700">Price</p>

    <form className="mt-4">
      <button
        className="block w-full p-4 text-sm font-medium transition bg-yellow-400 rounded hover:scale-105"
      >
        Add to Cart
      </button>
    </form>
  </div>
</a>
{/* hne toufa */}
        </div>
       </div>
       </div>
             

            {/* <section className="bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Kickstart your marketing</h2>

      <p className="mt-4 text-gray-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
        saepe laborum.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p className="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
          possimus adipisci distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p className="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
          possimus adipisci distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p className="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
          possimus adipisci distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p className="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
          possimus adipisci distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p className="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
          possimus adipisci distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p className="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
          possimus adipisci distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>
    </div>

    <div className="mt-12 text-center">
      <a
        href="#"
        className="mt-8 inline-flex items-center rounded border border-pink-600 bg-pink-600 px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-pink-500"
      >
        <span className="text-sm font-medium"> Get Started </span>

        <svg
          className="ml-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  </div>
</section> */}

      


{/* hne tabda l main */}
{/* <a href="#" className="relative block overflow-hidden group" style={{ width: "336px", height: "216" }}>
  <button
    className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

  <img
    src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1671013861/D%20and%20C/c90b0e81-2de2-432d-8e71-074c78e0b2fb.cc8fc55e344fec68f1df2c8028a71e54_xx2elr.jpg"
    alt=""
    className="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
    style={{ width: "336px", height: "216" }}
  />

  <div className="relative p-6 bg-white border border-gray-100">
    <span
      className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
    >
      New
    </span>

    <h3 className="mt-4 text-lg font-medium text-gray-900">product name</h3>

    <p className="mt-1.5 text-sm text-gray-700">$14.99</p>

    <form className="mt-4">
      <button
        className="block w-full p-4 text-sm font-medium transition bg-yellow-400 rounded hover:scale-105"
      >
        Add to Cart
      </button>
    </form>
  </div>
</a> */}
{/* hne toufa */}
{/* hne tabda l main */}
{/* <a href="#" className="relative block overflow-hidden group" style={{ width: "336px", height: "216" }}>
  <button
    className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

  <img
    src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1671014035/D%20and%20C/images_rhgr0c.jpg"
    alt=""
    className="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
    style={{ width: "336px", height: "216" }}
  />

  <div className="relative p-6 bg-white border border-gray-100">
    <span
      className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
    >
      New
    </span>

    <h3 className="mt-4 text-lg font-medium text-gray-900">product name</h3>

    <p className="mt-1.5 text-sm text-gray-700">$14.99</p>

    <form className="mt-4">
      <button
        className="block w-full p-4 text-sm font-medium transition bg-yellow-400 rounded hover:scale-105"
      >
        Add to Cart
      </button>
    </form>
  </div>
</a> */}
{/* hne toufa */}

              
              </div>
            </div>
        
  );
};

export default collection;

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogIn, RefreshCw, UserStar } from "lucide-react";

// Type for a single cart item
export interface CartItem {
  title: string;
  duration?: string;
  type?: string;
  price: number;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle
  const [open, setOpen] = useState(false); // cart sidebar toggle
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const data: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
  }, [open]);

  const handleDelete = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div className="bg-white sticky top-0 z-50 ">
        <div className="flex flex-row justify-between items-center h-25 px-4 sm:px-6 md:px-0">
          <div>
            <img
              className="mt-4 ml-4 sm:ml-6 md:ml-30 h-18 w-20"
              src="https://phonico.com/_next/image/?url=%2Fimages%2FsiteLogo.png&w=96&q=75"
              alt="Logo"
            />
          </div>

          <div className="hidden md:flex flex-row gap-10 mr-20">
            <Link href="/">
              <li className="list-none mt-6 font-semibold text-[#ec3c65] underline decoration-[#ec3c65] decoration-4 cursor-pointer">
                Home
              </li>
            </Link>

            <Link href="/plans">
              <li className="list-none mt-6 font-semibold hover:underline decoration-4 decoration-[#ec3c65] underline-offset-4 cursor-pointer">
                Plans
              </li>
            </Link>

            <Link href="/blogs">
              <li className="list-none mt-6 font-semibold hover:underline decoration-4 decoration-[#ec3c65] underline-offset-4 cursor-pointer">
                Blog
              </li>
            </Link>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex gap-5 mr-30 mt-5">
            <button
              onClick={() => setOpen((p) => !p)}
              className="p-2 border border-gray-300 h-12 w-15 hover:bg-gray-200 rounded"
            >
              <img
                className="ml-1.5"
                src="https://phonico.com/images/cartIcon.svg"
                alt="Cart"
              />
            </button>

            <Link href="/easypay">
              <button className="flex items-center justify-center gap-2 font-bold rounded p-2 text-white h-12 w-39 bg-[#ee5e7f] hover:bg-[#ec3c65]">
                <RefreshCw className="w-5 h-5" />
                Top-Up-Now
              </button>
            </Link>

            <Link href="/login">
              <button className="flex items-center justify-center gap-2 font-bold text-white p-2 h-12 w-35 bg-[#ee5e7f] hover:bg-[#ec3c65] rounded">
                <LogIn className="w-5 h-5" />
                Login
              </button>
            </Link>

            <Link href="/register">
              <button className="flex items-center justify-center gap-2 p-2 border border-gray-300 h-12 w-32 hover:bg-gray-200 text-black font-bold rounded">
                <UserStar className="w-5 h-5" />
                Sign Up
              </button>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 pt-4 pb-4 shadow flex flex-col items-center gap-2">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <li className="list-none font-bold text-[#ec3c65] underline decoration-[#ec3c65] decoration-4 cursor-pointer">
                Home
              </li>
            </Link>

            <Link href="/plans" onClick={() => setIsOpen(false)}>
              <li className="list-none font-bold hover:underline decoration-4 decoration-[#ec3c65] underline-offset-4 cursor-pointer">
                Plans
              </li>
            </Link>

            <Link href="/blogs" onClick={() => setIsOpen(false)}>
              <li className="list-none font-bold hover:underline decoration-4 decoration-[#ec3c65] underline-offset-4 cursor-pointer">
                Blog
              </li>
            </Link>

            <div className="flex flex-col gap-2 pt-2 items-center">
              <button
                onClick={() => {
                  setOpen(true);
                  setIsOpen(false);
                }}
                className="p-2 border border-gray-300 w-40 rounded flex justify-center bg-white"
              >
                <img
                  className="h-6 w-6"
                  src="https://phonico.com/images/cartIcon.svg"
                  alt="Cart"
                />
              </button>

              <Link href="/easypay" onClick={() => setIsOpen(false)}>
                <button className="font-bold rounded p-2 text-black w-40 bg-white border border-gray-300 hover:bg-gray-100">
                  Top-Up-Now
                </button>
              </Link>

              <Link href="/login" onClick={() => setIsOpen(false)}>
                <button className="font-bold rounded p-2 text-black w-40 bg-white border border-gray-300 hover:bg-gray-100">
                  Login
                </button>
              </Link>

              <Link href="/register" onClick={() => setIsOpen(false)}>
                <button className="p-2 border border-gray-300 w-40 hover:bg-gray-100 text-black font-bold rounded bg-white">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* CART SIDEBAR */}
      <div
        className={`fixed mt-2 mr-2 right-0 h-full w-[400px] bg-white rounded-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-bold text-lg">My Cart</h2>
          <button
            onClick={() => setOpen(false)}
            className="font-bold text-gray-600"
          >
            ✕
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="border rounded p-3 flex gap-3 items-center"
              >
                <img
                  src="https://phonico.com/_next/image/?url=%2Fimages%2FsiteLogo.png&w=96&q=75"
                  className="w-12 h-12 object-contain"
                  alt=""
                />

                <div className="flex-1">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">
                    {item.duration} • {item.type}
                  </p>
                  <p className="font-bold text-pink-500">${item.price}</p>
                </div>

                <button
                  onClick={() => handleDelete(index)}
                  className="text-sm border p-2 rounded text-[#ec3c65] hover:bg-pink-400 hover:text-white"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t absolute bottom-0 w-full bg-white">
          <p className="font-semibold mb-4">
            Total: <span className="text-pink-500">${totalPrice}</span>
          </p>

          <button
            disabled
            className="w-full border-2 border-pink-400 text-pink-400 font-bold py-2 rounded opacity-50 cursor-not-allowed"
          >
            Checkout
          </button>
        </div>
      </div>

      {/* CART OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}
    </>
  );
};

export default Header;

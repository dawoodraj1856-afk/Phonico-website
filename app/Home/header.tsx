"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LogIn, RefreshCw, UserStar } from "lucide-react";

// Type for a single cart item
export interface CartItem {
  title: string;
  duration?: string; // optional, some items may not have it
  type?: string; // optional
  price: number;
}

// Type for the Header component state (optional)
interface HeaderState {
  isOpen: boolean; // mobile menu
  open: boolean; // cart sidebar
  cart: CartItem[];
}

// Header component
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(data);
    }
  }, [open]);

  const handleDelete = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Proceeding to checkout. Total: $${totalPrice}`);
  };

  return (
    <>
      <div className="bg-white sticky top-0 z-50">
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
              <li className="list-none mt-6 font-semibold text-[#ec3c65] underline decoration-[#ec3c65] decoration-4">
                Home
              </li>
            </Link>{" "}
            <Link href="/plans">
              <li className="list-none mt-6 font-semibold hover:underline decoration-4 decoration-[#ec3c65] underline-offset-4">
                Plans
              </li>
            </Link>
            <Link href="/blogs">
              <li className="list-none mt-6 font-semibold hover:underline decoration-4 decoration-[#ec3c65] underline-offset-4">
                Blog
              </li>
            </Link>
          </div>

          <div className="hidden md:flex gap-5 mr-30 mt-5">
            <button
              onClick={() => setOpen((prev) => !prev)}
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
              <button className="flex items-center justify-center gap-2 font-bold rounded text-white p-2 h-12 w-35 bg-[#ee5e7f] hover:bg-[#ec3c65]">
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
                xmlns="http://www.w3.org/2000/svg"
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

        {isOpen && (
          <div className="md:hidden bg-white px-4 pt-2 pb-3 space-y-1 shadow">
            <li className="list-none font-bold text-[#ec3c65] underline decoration-[#ec3c65] decoration-4 py-1">
              Home
            </li>
            <li className="list-none font-bold hover:underline decoration-4 decoration-[#ec3c65] underline-offset-4 py-1">
              Plans
            </li>
            <li className="list-none font-bold hover:underline decoration-4 decoration-[#ec3c65] underline-offset-4 py-1">
              Blog
            </li>
            <div className="flex flex-col space-y-2 mt-2">
              <button
                onClick={() => setOpen(true)}
                className="p-2 border border-gray-300 w-full hover:bg-gray-200 rounded flex justify-center"
              >
                <img
                  className="h-6 w-6"
                  src="https://phonico.com/images/cartIcon.svg"
                  alt="Cart"
                />
              </button>
              <button className="font-bold rounded p-2 text-white w-full bg-[#ee5e7f] hover:bg-[#ec3c65]">
                Top-Up-Now
              </button>
              <button className="font-bold rounded p-2 text-white w-full bg-[#ee5e7f] hover:bg-[#ec3c65]">
                Login
              </button>
              <button className="p-2 border border-gray-300 w-full hover:bg-gray-200 text-black font-bold rounded">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>

      <div
        className={`fixed mt-2 mr-2  right-0 h-full w-[400px] bg-white rounded-2xl z-50 transform transition-transform duration-300
  ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 border-b border-gray-200 bg-white flex justify-between items-center">
          <h2 className="font-bold text-lg">My Cart</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-600 hover:text-gray-800 font-bold"
          >
            ✕
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)] bg-white ,">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="border w-full rounded p-3 flex justify-between items-center gap-3 bg-white"
              >
                <img
                  src="https://phonico.com/_next/image/?url=%2Fimages%2FsiteLogo.png&w=96&q=75"
                  alt=""
                  className="w-12 h-12 object-contain"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    {item.duration} • {item.type}
                  </p>
                  <p className="font-bold text-pink-500 mt-1">${item.price}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-[#ec3c65] text-sm border hover:bg-pink-400 hover:text-white font-semibold p-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t border-gray-200 bg-white absolute bottom-0 w-full">
          <p className="font-semibold text-lg mb-10">
            Total: <span className="text-pink-500">${totalPrice}</span>
          </p>
          <button className="w-full mb-30 hover:bg-[#ec3c65] border-pink-400 border-2 text-pink-400 hover:text-white  font-bold py-2 rounded cursor-not-allowed opacity-50">
            Checkout
          </button>
        </div>
      </div>

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

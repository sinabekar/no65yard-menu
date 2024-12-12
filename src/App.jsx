import React from "react";
import ReactDOM from "react-dom/client";
import { Link, Element } from "react-scroll";
import { useState, useEffect } from "react";

const lst = {
  contentSection1: [
    { name: "آیس لاته", items: "شیر + اسپرسو + یخ", price: "۶۵ هزار تومان" },
    { name: "آیس لاته", items: "شیر + اسپرسو + یخ", price: "۶۵ هزار تومان" },
    { name: "آیس لاته", items: "شیر + اسپرسو + یخ", price: "۶۵ هزار تومان" },
  ],
  contentSection2: [
    { name: "آیس لاته", items: "شیر + اسپرسو + یخ", price: "۶۵ هزار تومان" },
    { name: "آیس لاته", items: "شیر + اسپرسو + یخ", price: "۶۵ هزار تومان" },
    { name: "آیس لاته", items: "شیر + اسپرسو + یخ", price: "۶۵ هزار تومان" },
  ],
  contentSection3: [
    { name: "آیس لاته", items: "شیر + اسپرسو + یخ", price: "۶۵ هزار تومان" },
    { name: "آیس لاته", items: "شیر + اسپرسو + یخ", price: "۶۵ هزار تومان" },
    { name: "آیس لاته", items: "شیر + اسپرسو + یخ", price: "۶۵ هزار تومان" },
  ],
};

const ItemCard = ({ name, items, price }) => {
  return (
    <div className="flex w-[90%] items-center justify-around bg-primaryDarkGreen p-4 rounded-lg shadow-md mb-4 mx-auto">
      {/* Text Content */}
      <div className="flex flex-col">
        <h3 className="text-white text-lg font-bold">{name}</h3>
        <p className="text-primaryYellow text-sm">{items}</p>
        <p className="text-primaryOrange mt-2">{price}</p>
      </div>
      {/* Image */}
      <div className="w-16 h-16 bg-primaryGreen rounded-lg overflow-hidden">
        <img
          src="../public/آب پرتقال.jpg"
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const Section = ({ title, items, id }) => {
  return (
    <Element
      name={id}
      className="w-full flex items-center justify-center bg-primaryGreen text-white my-10 mt-24"
    >
      <div className="text-center w-full">
        <h2 className="text-2xl font-semibold text-primaryYellow">{title}</h2>
        {items.map((item, index) => (
          <ItemCard key={index} {...item} />
        ))}
      </div>
    </Element>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-primaryDarkGreen text-white p-4 fixed w-full top-0 left-0 z-50 transition-transform duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* <h1 className="text-2xl font-bold">Your Coffee Shop</h1> */}
        <nav className="flex space-x-4">
          <Link
            to="contentSection1"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="bg-primaryOrange"
            className="px-4 py-2 bg-primaryYellow rounded hover:bg-primaryOrange focus:outline-none focus:ring-2 focus:ring-primaryYellow"
          >
            Section 1
          </Link>
          <Link
            to="contentSection2"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="bg-primaryOrange"
            className="px-4 py-2 bg-primaryYellow rounded hover:bg-primaryOrange focus:outline-none focus:ring-2 focus:ring-primaryYellow"
          >
            Section 2
          </Link>
          <Link
            to="contentSection3"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="bg-primaryOrange"
            className="px-4 py-2 bg-primaryYellow rounded hover:bg-primaryOrange focus:outline-none focus:ring-2 focus:ring-primaryYellow"
          >
            Section 3
          </Link>
        </nav>
      </div>
    </header>
  );
};

const App = () => {
  return (
    <div className="bg-primaryGreen min-h-screen pt-20">
      {/* Header */}
      <Header />

      {/* Content Sections */}
      {Object.entries(lst).map(([section, items], index) => (
        <Section
          key={index}
          title={`Section ${index + 1}`}
          items={items}
          id={section}
        />
      ))}
    </div>
  );
};

export default App;

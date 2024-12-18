import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const ProductList = ({ data }) => {
  const PRODUCTS_PER_PAGE = 12;
  const [visibleProducts, setVisibleProducts] = useState(PRODUCTS_PER_PAGE);

  const handleShowMore = () => {
    setVisibleProducts((prevCount) => prevCount + PRODUCTS_PER_PAGE);
  };

  return (
    <>
      <div className="p-10 grid md:grid-cols-2 lg:grid-cols-4  gap-5">
        {data.slice(0, visibleProducts).map((item, index) => (
          <div
            key={index}
            className="p-5 border border-gray-800 rounded-lg grid place-items-center"
          >
            <img
              className="w-[20vw] h-[20vw]"
              src={item?.images}
              alt={item?.title}
            />

            <h1 className="my-4 text-2xl font-bold">
              {item?.title.slice(0, 20)}
            </h1>

            <h1 className="my-4 text-xl font-semibold">
              Rs. {item?.price}
            </h1>
            <Link
              className="bg-slate-300 mt-3 rounded-md px-7 py-2 hover:underline"
              to={`/product/${item.id}`}
            >
              View More
            </Link>
          </div>
        ))}
      </div>
      {visibleProducts < data.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="bg-blue-500 hover:bg-blue-600 text-white mb-5 font-semibold px-6 py-2 rounded-md transition"
          >
            Show More
          </button>
        </div>
      )}
      {visibleProducts >= data.length && (
        <p className="text-center text-gray-500 mt-6">
          No more products to load.
        </p>
      )}
    </>
  );
};

export default ProductList;

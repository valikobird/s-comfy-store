import { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList.jsx";
import { useLoaderData } from "react-router-dom";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;

  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (layoutCode) => {
    return `text-xl btn btn-sm ${layoutCode === layout ? "btn-primary text-primary-content" : "btn-ghost text-based-content"}`;
  };

  const productsElement = (layoutCode) => {
    switch (layoutCode) {
      case "grid":
        return <ProductsGrid />;
      case "list":
        return <ProductsList />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search
          </h5>
        ) : (
          productsElement(layout)
        )}
      </div>
    </>
  );
};

export default ProductsContainer;

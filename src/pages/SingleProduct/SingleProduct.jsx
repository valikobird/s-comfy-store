import { Link, useLoaderData } from "react-router-dom";
import { formatPrice, generateQuantityOptions } from "../../utils";
import { useState } from "react";

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, company, colors } =
    product.attributes;
  const dollarsAmount = formatPrice(price);

  const [productColor, setProductColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (e) => {
    setQuantity(+e.target.value);
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-semibold">{title}</h1>
          <h4 className="text-xl text-secondary font-semibold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6 form-control">
            <label className="label">
              <h4 className="text-md font-medium tracking-wide capitalize">
                colors
              </h4>
            </label>
            <div>
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 cursor-pointer rounded-md ${color === productColor && "border-2 border-secondary"}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          <div className="mt-6 form-control w-full max-w-xs">
            <label className="label" htmlFor="quantity">
              <h4 className="text-md font-medium tracking-wide capitalize">
                Quantity
              </h4>
            </label>
            <select
              id="quantity"
              className="select select-secondary select-md"
              value={quantity}
              onChange={handleQuantity}
            >
              {generateQuantityOptions(5)}
            </select>
          </div>
          <div className="mt-10">
            <button
              className="btn btn-primary btn-md uppercase"
              onClick={() => console.log("Added to bag")}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;

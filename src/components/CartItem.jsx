import { formatPrice, generateQuantityOptions } from "../utils/index.jsx";

const CartItem = ({ cartItem }) => {
  const { cartId, title, price, image, quantity, company, productColor } =
    cartItem;

  return (
    <article
      key={cartId}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="mt-2 capitalize text-sm text-secondary">{company}</h4>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color :
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-24">
        <div className="fieldset max-w-xs">
          <label htmlFor="quantity" className="label p-0">
            <span className="label-text">Quantity</span>
          </label>
          <select
            name="quantity"
            id="quantity"
            className="mt-2 select select-xs"
          >
            {generateQuantityOptions(quantity + 5)}
          </select>
        </div>
        <button className="mt-2 link link-primary link-hover text-sm capitalize">
          remove
        </button>
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;

import { customFetch } from "../../utils";

const url = "/products?featured=true";

const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

export default loader;

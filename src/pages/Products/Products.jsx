import {
  ProductsContainer,
  Filters,
  PaginationContainer,
} from "../../components";

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;

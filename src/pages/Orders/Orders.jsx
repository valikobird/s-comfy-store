import { useLoaderData } from "react-router-dom";
import {
  OrdersList,
  PaginationContainer,
  SectionTitle,
} from "../../components";

const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle text="please make an order" />;
  }

  return (
    <>
      <SectionTitle text="Your orders" />
      <OrdersList />
      <PaginationContainer />
    </>
  );
};

export default Orders;

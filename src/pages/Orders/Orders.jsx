import { useLoaderData } from "react-router-dom";
import {
  OrdersList,
  PaginationContainerAdvanced,
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
      <PaginationContainerAdvanced />
    </>
  );
};

export default Orders;

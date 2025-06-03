import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

const loader = (store) => {
  return () => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("You must be logged in to checkout");
      return redirect("/login");
    }

    return null;
  };
};

export default loader;

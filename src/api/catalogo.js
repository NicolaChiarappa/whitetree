import axios from "axios";
import { headers } from "next/dist/client/components/headers";

const Products = () => {
  let prodotto = {};
  axios.get("https://api.printful.com/store/products", headers);
};

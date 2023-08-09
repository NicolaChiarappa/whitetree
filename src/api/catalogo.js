import axios from "axios";

function Products() {
  let prodotto = {};
  axios
    .get("https://api.printful.com/store/products", {
      headers: {
        "Authorization": "Bearer WE1TCUYTjuG9CbhoiSjmDVEePxkgvQl8SzYdweKj",
      },
    })
    .then((res) => {
      console.log(res);
    });
}
export default Products;

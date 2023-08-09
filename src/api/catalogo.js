import { PrintfulClient } from "printful-request";

const printful = new PrintfulClient("WE1TCUYTjuG9CbhoiSjmDVEePxkgvQl8SzYdweKj");
function funzione() {
  printful.get("products").then(({ result }) => console.log(result));
}
export default funzione;

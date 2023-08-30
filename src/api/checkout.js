const axios = require("axios");

const checkout = (carrello) => {
  let cart = [];
  carrello.map((e) => {
    cart.push({
      price_data: {
        currency: "eur",
        unit_amount: e.price * 100,
        product_data: {
          name: e.name,
          description: "Uomo taglia " + e.size,
          images: [
            "https://www.underthewhitetree.it/_next/image?url=%2Fbacio_m_0.webp&w=3840&q=75",
          ],
        },
      },
      quantity: e.quantity,
    });
  });

  try {
    console.log(cart);
    axios({
      method: "post",
      url: "https://wtserver.onrender.com/",
      data: cart,
    }).then((res) => window.open(res.data, "_self"));
  } catch {
    (e) => {
      console.log(e);
    };
  }
};

export default checkout;

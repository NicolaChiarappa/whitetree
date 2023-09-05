const checkout = (carrello) => {
  let cart = [];
  carrello.map((e) => {
    const image =
      "https: //www.underthewhitetree.it/_next/image?url=%2F" +
      e.type.toLowerCase() +
      "%2F" +
      e.name.toLowerCase() +
      "_" +
      e.gender +
      "_0.webp&w=3840&q=50";
    cart.push({
      price_data: {
        currency: "eur",
        unit_amount: e.price * 100,
        product_data: {
          name: e.name,
          description:
            e.gender == "m"
              ? e.type + " Uomo," + " taglia " + e.size
              : e.gender == "f"
              ? e.type + " Donna," + " taglia " + e.size
              : e.type + " Bambino," + " taglia " + e.size,
          images: [image],
        },
      },
      quantity: e.quantity,
    });
  });
  console.log(cart);
  return cart;
};

export default checkout;

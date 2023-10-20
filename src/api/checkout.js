const checkout = (carrello, coupon = "") => {
  let body = { cart: [], coupon: coupon };
  carrello.map((e) => {
    const image =
      e.type.toLowerCase() == "maglia"
        ? "https://www.underthewhitetree.it/_next/image?url=%2Fmaglie" +
          "%2F" +
          e.name.toLowerCase() +
          "_" +
          e.gender +
          "_0.webp&w=3840&q=50"
        : "https://www.underthewhitetree.it/_next/image?url=%2Ffelpe" +
          "%2F" +
          e.name.toLowerCase() +
          "_" +
          e.gender +
          "_0.webp&w=3840&q=50";
    body["cart"].push({
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

  return body;
};

export default checkout;

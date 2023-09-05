const checkout = (carrello) => {
  let cart = [];
  carrello.map((e) => {
    cart.push({
      price_data: {
        currency: "eur",
        unit_amount: e.price * 100,
        product_data: {
          name: e.name,
          description:
            e.gender == "m"
              ? "Uomo,"
              : e.gender == "f"
              ? "Donna,"
              : "Bambino," + " taglia " + e.size,
          images: [
            "https://www.underthewhitetree.it/_next/image?url=%2Fbacio_m_0.webp&w=3840&q=75",
          ],
        },
      },
      quantity: e.quantity,
    });
  });

  return cart;
};

export default checkout;

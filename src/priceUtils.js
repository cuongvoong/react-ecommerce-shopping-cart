export const formatPrice = (price, currency = "USD") => {
  switch (currency) {
    default:
      return "$" + price.toFixed(2);
  }
};

export const calculateTax = price => {
  return price * 0.0875;
};

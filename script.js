function selectUnit(checkoutId) {
  const allCheckouts = document.querySelectorAll(".checkout-box");
  const banner = document.querySelector(".banner");

  allCheckouts.forEach((checkout) => {
    const isSelected = checkout.id === checkoutId;
    updateCheckoutDisplay(checkout, isSelected);
  });

  banner.style.top = checkoutId === "checkout-2" ? "-4.9%" : "-10.5%";
}

function updateCheckoutDisplay(checkout, isSelected) {
  const table = checkout.querySelector(".checkout-table");

  checkout.style.backgroundColor = isSelected ? "#feb3bd3f" : "white";
  checkout.style.cursor = isSelected ? "default" : "pointer";
  table.style.display = isSelected ? "block" : "none";
}

function handleBuy(total, purchased) {
  $(".product-buy").click(function() {
    //console.log(total)
    const quantity = $(this)
      .parent()
      .find(".product-input")
      .val();

    if (quantity < 0) {
      $(this)
        .parent()
        .next(".error")
        .show();
    } else {
      $(this)
        .parent()
        .next(".error")
        .hide();
      const name = $(this)
        .parent()
        .attr("data-key");
      const price = $(this)
        .parent()
        .attr("data-price");


      if (purchased[name]) {
        purchased[name]["quantity"] =
          Number(purchased[name]["quantity"]) + Number(quantity);
      } else {
        purchased[name] = {
          name: name,
          price: price,
          quantity: quantity
        };
      
      }
      subTotal = purchased[name]["price"] * purchased[name]["quantity"];
      //todo: update total
      console.log(subTotal)
      console.log(purchased)
      
      handleTotal(total, -subTotal);
      
      handleShoppingCart(purchased);
    }
  });
}

function handleShoppingCart(purchased) {
  if ($.isEmptyObject(purchased)) {
    $(".shoppingCart").hide();
  } else {
    $(".shoppingCart").show();
    let htmlContent = "";
    //console.log(purchased);
    for (var key in purchased) {
      htmlContent += `<li>${key}, $${purchased[key].price}, ${purchased[key].quantity}</li>`;
    }
    $(".shoppingCart ul").html(htmlContent);
  }
}

function handleTotal(total, diff = 0) {
  total = total + diff;
  // $("#fund-total").html("$"+total+" left");
  $("#fund-total").html(`$${total} left`);
}

$(document).ready(function() {
  let total = 100000;
  let subTotal = 0;
  //amount = {'total':100000,'subTotal':0};
  purchased = {};
  handleShoppingCart(purchased);
  handleTotal(total);
  handleBuy(total, purchased);
});
var NumberOfItemsinList = 2;
var TotalValue = new Array(NumberOfItemsinList);
var i = 0;
var m = 0;
var z = 0;
var loveValuePixel = 0;
var loveValueIphone = 0;
var indexaddRemove = "======";

function listenertolove() {
  var button = document.querySelectorAll(".Wish-List", ".Wish-List-3");
  for (i = 0; i < NumberOfItemsinList; i++) {
    button[i].addEventListener("click", wishlistFunc);
    console.log(button[i]);
  }
}
function wishlistFunc(event) {
  event.preventDefault();
  var ButtonClicked = event.target;
  var Item = ButtonClicked.parentNode.firstChild.nextElementSibling.textContent;
  // ButtonClicked.className = "Wish-List heart fas fa-heart";

  if (ButtonClicked.classList.contains("far")) {
    ButtonClicked.classList.replace("far", "fas");
    if (ButtonClicked.classList.contains("PixelLove")) {
      loveValuePixel++;
    } else {
      loveValueIphone++;
    }
  } else {
    ButtonClicked.classList.replace("fas", "far");
    if (ButtonClicked.classList.contains("PixelLove")) {
      loveValuePixel--;
    } else {
      loveValueIphone--;
    }
  }
  console.log(loveValuePixel);
  console.log(loveValueIphone);

  console.log(Item);
  var wishlist = document.getElementsByClassName("WishListItems");
  console.log(wishlist);
  if (loveValuePixel && loveValueIphone == 1) {
    wishlist[0].textContent = " Iphone And Pixel Added To your Wish List";
  } else if (loveValuePixel == 1) {
    wishlist[0].textContent = "Pixel added to your wish list";
  } else if (loveValueIphone == 1) {
    wishlist[0].textContent = "Iphone added to your wish list";
  } else {
    wishlist[0].textContent = " Your Wish List Is Empty";
  }
}

function addRemove() {
  var addButton = document.getElementsByClassName("addButton");
  var removeButton = document.getElementsByClassName("removeButton");
  console.log(addButton[0]);
  for (var i = 0; i < NumberOfItemsinList; i++) {
    addButton[i].addEventListener("click", addButtonf);
    removeButton[i].addEventListener("click", removeButtonf);
    console.log(indexaddRemove);
  }
}
function addButtonf(event) {
  var ButtonClicked = event.target;
  var QuantityValue = ButtonClicked.nextElementSibling.nextElementSibling;
  QuantityValueFloat = parseFloat(QuantityValue.textContent);
  QuantityValueFloat++;
  QuantityValue.textContent = QuantityValueFloat;
  event.preventDefault();

  function TotalValuef() {
    QuantityValue = document.getElementsByClassName("QuantityValue");
    console.log(QuantityValue);
    // var CartTotal = document.getElementsByClassName("CartTotal");
    // CartTotal = CartTotal[0];
    var price = document.getElementsByClassName("PriceValue");
    console.log(price);
    for (i = 0; i < NumberOfItemsinList; i++) {
      TotalValue[i] =
        parseFloat(price[i].textContent) *
        parseFloat(QuantityValue[i].textContent);
    }
    var CartTotal = document.getElementsByClassName("CartTotal");
    var CartTotalValue = 0;
    for (i = 0; i < NumberOfItemsinList; i++) {
      CartTotalValue = parseFloat(TotalValue[i]) + parseFloat(CartTotalValue);
      console.log(TotalValue[0]);
    }
    CartTotal[0].textContent = "$" + CartTotalValue;
  }
  TotalValuef();
}

function removeButtonf(event) {
  var ButtonClicked = event.target;
  var QuantityValue = ButtonClicked.nextElementSibling;
  QuantityValueFloat = parseFloat(QuantityValue.textContent);
  if (QuantityValueFloat > 0) {
    QuantityValueFloat--;
  }

  QuantityValue.textContent = QuantityValueFloat;
  event.preventDefault();

  function TotalValuef() {
    QuantityValue = document.getElementsByClassName("QuantityValue");
    console.log(QuantityValue);
    // var CartTotal = document.getElementsByClassName("CartTotal");
    // CartTotal = CartTotal[0];
    var price = document.getElementsByClassName("PriceValue");
    for (i = 0; i < NumberOfItemsinList; i++) {
      TotalValue[i] =
        parseFloat(price[i].textContent) *
        parseFloat(QuantityValue[i].textContent);
    }

    var CartTotal = document.getElementsByClassName("CartTotal");
    var CartTotalValue = 0;
    for (i = 0; i < NumberOfItemsinList; i++) {
      CartTotalValue = parseFloat(TotalValue[i]) + parseFloat(CartTotalValue);
      console.log(CartTotalValue);
    }
    CartTotal[0].textContent = "$" + CartTotalValue;
  }
  TotalValuef();
}
function deleteButton() {
  var deleteButton = document.getElementsByClassName("delete");
  for (i = 0; i < NumberOfItemsinList; i++) {
    var deleteButtoni = deleteButton[i];
    deleteButtoni.addEventListener("click", ClearList);
  }
}

function TotalValuef() {
  QuantityValue = document.getElementsByClassName("QuantityValue");
  console.log(QuantityValue);
  // var CartTotal = document.getElementsByClassName("CartTotal");
  // CartTotal = CartTotal[0];
  var price = document.getElementsByClassName("PriceValue");
  for (i = 0; i < NumberOfItemsinList; i++) {
    TotalValue[i] =
      parseFloat(price[i].textContent) *
      parseFloat(QuantityValue[i].textContent);
  }

  var CartTotal = document.getElementsByClassName("CartTotal");
  var CartTotalValue = 0;
  for (i = 0; i < NumberOfItemsinList; i++) {
    CartTotalValue = parseFloat(TotalValue[i]) + parseFloat(CartTotalValue);
    console.log(CartTotalValue);
  }
  CartTotal[0].textContent = "$" + CartTotalValue;
}
function ClearList(event) {
  var Sum = document.getElementsByClassName("CartTotal");
  var Button = event.target;
  Button.parentElement.remove();
  NumberOfItemsinList--;
  TotalValuef();
  console.log(CartTotalValue);
}

deleteButton();
console.log(i);
listenertolove();
addRemove();

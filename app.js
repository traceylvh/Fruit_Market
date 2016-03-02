//this gives us a random number
function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

//this is what controlls which function runs when
//the market updates and the interval at which it  updates
var marketFluctuator = setInterval(updateMarket, 15000);

//these are the variables that hold the market prices of the fruits
var marketApplePrice = 4.00;
var marketBananaPrice = 5.00;
var marketGrapePrice = 1.00;
var marketOrangePrice = 3.00;
var marketPearPrice = 7.00;
var marketWatermelonPrice = 1.00;


//this is a function that updates a single fruit market price
function singleFruitMarketUpdater(fruitMarket){
  fruitMarket += randomNumber(-50, 50)/100;
  if (fruitMarket < .5) {
    fruitMarket = .5;
  };

  if (fruitMarket > 9.99) {
    fruitMarket = 9.99;
  };
  return ((Math.floor(fruitMarket*100))/100);
}


//this is the function that updates the market
function updateMarket() {
  //this part changes the market price of each fruit
  marketApplePrice = singleFruitMarketUpdater(marketApplePrice);
  $('.apple-price').text(marketApplePrice.toFixed(2));
  $('.buy-apple-button').data("applePriceData", marketApplePrice);

  marketBananaPrice = singleFruitMarketUpdater(marketBananaPrice);
  $('.banana-price').text(marketBananaPrice.toFixed(2));
  $('.buy-banana-button').data("bananaPriceData", marketBananaPrice);

  // marketGrapePrice = singleFruitMarketUpdater(marketGrapePrice);
  // $('.grape-price').text(marketGrapePrice);
  marketOrangePrice = singleFruitMarketUpdater(marketOrangePrice);
  $('.orange-price').text(marketOrangePrice.toFixed(2));
  $('.buy-orange-button').data("orangePriceData", marketOrangePrice);

  marketPearPrice = singleFruitMarketUpdater(marketPearPrice);
  $('.pear-price').text(marketPearPrice.toFixed(2));
  $('.buy-pear-button').data("pearPriceData", marketPearPrice);
  // marketWatermelonPrice = singleFruitMarketUpdater(marketWatermelonPrice);
  // $('.watermelon-price').text(marketWatermelonPrice);

};

var inventory = {
  cashOnHand: 100,
  appleStock: 0,
  bananaStock: 0,
  grapeStock: 0,
  orangeStock: 0,
  pearStock: 0,
  watermelonStock: 0,
  applePrices: [],
  bananaPrices: [],
  grapePrices: [],
  orangePrices: [],
  pearPrices: [],
  watermelonPrices: [],
};


function averagePrice(inventoryArray) {
  var totalPrice = 0;
  for (var i=0; i < inventoryArray.length; i++) {
    totalPrice += inventoryArray[i];
  }
  var averagePrice = totalPrice/inventoryArray.length;
  return averagePrice;
}

function buyApple () {
  currentApplePrice = $('.buy-apple-button').data("applePriceData");
  //this makes it so you can't buy apples when you don't have enough money
  if (inventory.cashOnHand < currentApplePrice) {
     console.log("YOU CANT BUY THAT");
     //TODO add an alert telling the user they cant
  } else {
    //this adds an apple to our stock of apples
    inventory.appleStock ++;
    //this adds the purchase price to our array of apple prices
    inventory.applePrices.push(currentApplePrice);
    //this subtracts the current apple price from our cash on hand
    inventory.cashOnHand -= currentApplePrice;
    //this will append the price of the last apple purchased to your inventory
    $('.apple-inventory').append('<p>Apple purchased for: $' + currentApplePrice.toFixed(2) + '</p>')
    //this updates the current cash on hand at the top of the page
    $('.current-cash').text(inventory.cashOnHand.toFixed(2));
    //this updates the inventory display
    $('.apple-inventory-display').text("Apple count: " + inventory.appleStock);
    //this creates a variable that is the average apple price in inventory
    var averageApplePrice = averagePrice(inventory.applePrices).toFixed(2);
    //this appends that average to your inventory
    $('.avg-apple-price').text("Average Price: $" + averageApplePrice);
  };
}

function sellApple() {
  if (inventory.appleStock > 0) {
    inventory.appleStock --;
    inventory.cashOnHand += $('.buy-apple-button').data("applePriceData");
    //this updates the current cash on hand at the top of the page
    $('.current-cash').text(inventory.cashOnHand.toFixed(2));
    //this updates the inventory display
    $('.apple-inventory-display').text("Apple count: " + inventory.appleStock);
  }
}

function buyBanana () {
  currentBananaPrice = $('.buy-banana-button').data("bananaPriceData");
  //this makes it so you can't buy bananas when you don't have enough money
  if (inventory.cashOnHand < currentBananaPrice) {
     console.log("YOU CANT BUY THAT");
     //TODO add an alert telling the user they cant
  } else {
    //this adds an apple to our stock of bananas
    inventory.bananaStock ++;
    //this adds the purchase price to our array of banana prices
    inventory.bananaPrices.push(currentBananaPrice);
    //this subtracts the current banana price from our cash on hand
    inventory.cashOnHand -= currentBananaPrice;
    //this will append the price of the last banana purchased to your inventory
    $('.banana-inventory').append('<p>Banana purchased for: $' + currentBananaPrice.toFixed(2) + '</p>')
    //this updates the current cash on hand at the top of the page
    $('.current-cash').text(inventory.cashOnHand.toFixed(2));
    //this updates the inventory display
    $('.banana-inventory-display').text("Banana count: " + inventory.bananaStock);
    //this creates a variable that is the average apple price in inventory
    var averageBananaPrice = averagePrice(inventory.bananaPrices).toFixed(2);
    //this appends that average to your inventory
    $('.avg-banana-price').text("Average Price: $" + averageBananaPrice);
  };
}

function sellBanana() {
  if (inventory.bananaStock > 0) {
    inventory.bananaStock --;
    inventory.cashOnHand += $('.buy-banana-button').data("bananaPriceData");
    //this updates the current cash on hand at the top of the page
    $('.current-cash').text(inventory.cashOnHand.toFixed(2));
    //this updates the inventory display
    $('.banana-inventory-display').text("Banana count: " + inventory.bananaStock);
  }
}


function buyOrange () {
  currentOrangePrice = $('.buy-orange-button').data("orangePriceData");
  //this makes it so you can't buy organge when you don't have enough money
  if (inventory.cashOnHand < currentOrangePrice) {
     console.log("YOU CANT BUY THAT");
     //TODO add an alert telling the user they cant
  } else {
    //this adds an orange to our stock of orange
    inventory.orangeStock ++;
    //this adds the purchase price to our array of orange prices
    inventory.orangePrices.push(currentOrangePrice);
    //this subtracts the current orange price from our cash on hand
    inventory.cashOnHand -= currentOrangePrice;
    //this will append the price of the last orange purchased to your inventory
    $('.orange-inventory').append('<p>Orange purchased for: $' + currentOrangePrice.toFixed(2) + '</p>')
    //this updates the current cash on hand at the top of the page
    $('.current-cash').text(inventory.cashOnHand.toFixed(2));
    //this updates the inventory display
    $('.orange-inventory-display').text("Orange count: " + inventory.orangeStock);
    //this creates a variable that is the average apple price in inventory
    var averageOrangePrice = averagePrice(inventory.orangePrices).toFixed(2);
    //this appends that average to your inventory
    $('.avg-orange-price').text("Average Price: $" + averageOrangePrice);
  };
}

function sellOrange() {
  if (inventory.orangeStock > 0) {
    inventory.orangeStock --;
    inventory.cashOnHand += $('.buy-orange-button').data("orangePriceData");
    //this updates the current cash on hand at the top of the page
    $('.current-cash').text(inventory.cashOnHand.toFixed(2));
    //this updates the inventory display
    $('.orange-inventory-display').text("Orange count: " + inventory.orangeStock);
  }
}


function buyPear () {
  currentPearPrice = $('.buy-pear-button').data("pearPriceData");
  //this makes it so you can't buy pear when you don't have enough money
  if (inventory.cashOnHand < currentPearPrice) {
     console.log("YOU CANT BUY THAT");
     //TODO add an alert telling the user they cant
  } else {
    //this adds an pear to our stock of pear
    inventory.pearStock ++;
    //this adds the purchase price to our array of pear prices
    inventory.pearPrices.push(currentPearPrice);
    //this subtracts the current pear price from our cash on hand
    inventory.cashOnHand -= currentPearPrice;
    //this will append the price of the last pear purchased to your inventory
    $('.pear-inventory').append('<p>Pear purchased for: $' + currentPearPrice.toFixed(2) + '</p>')
    //this updates the current cash on hand at the top of the page
    $('.current-cash').text(inventory.cashOnHand.toFixed(2));
    //this updates the inventory display
    $('.pear-inventory-display').text("Pear count: " + inventory.pearStock);
    //this creates a variable that is the average pear price in inventory
    var averagePearPrice = averagePrice(inventory.pearPrices).toFixed(2);
    //this appends that average to your inventory
    $('.avg-pear-price').text("Average Price: $" + averagePearPrice);
  };
}

function sellPear() {
  if (inventory.pearStock > 0) {
    inventory.pearStock --;
    inventory.cashOnHand += $('.buy-pear-button').data("pearPriceData");
    //this updates the current cash on hand at the top of the page
    $('.current-cash').text(inventory.cashOnHand.toFixed(2));
    //this updates the inventory display
    $('.pear-inventory-display').text("Pear count: " + inventory.pearStock);
  }
}

var count = 301;
var timer = setInterval(timerFunction, 1000);
function timerFunction() {
  count--;
  $('.timer').text(count + " seconds left");
  if (count == 0) {
    clearInterval(timer);
    clearInterval(marketFluctuator);


    inventory.cashOnHand += inventory.appleStock * $('.buy-apple-button').data("applePriceData");
    inventory.appleStock = 0;
    //this updates the inventory display
    $('.apple-inventory-display').text("Apple count: " + inventory.appleStock);


    inventory.cashOnHand += inventory.bananaStock * $('.buy-banana-button').data("bananaPriceData");
    inventory.bananaStock = 0;
    $('.banana-inventory-display').text("Banana count: " + inventory.bananaStock);

    inventory.cashOnHand += inventory.orangeStock * $('.buy-orange-button').data("orangePriceData");
    inventory.orangeStock = 0;
    $('.orange-inventory-display').text("Orange count: " + inventory.orangeStock);

    inventory.cashOnHand += inventory.pearStock * $('.buy-pear-button').data("pearPriceData");
    inventory.pearStock = 0;
    $('.pear-inventory-display').text("Pear count: " + inventory.pearStock);

    $('button').hide();

    $('.current-cash').text(inventory.cashOnHand.toFixed(2));

  }

}



$(document).ready(function(){

  timerFunction();
  //makes sure that the current cash on hand displayed on the dom matches the object
  // $('.current-cash').text(inventory.cashOnHand);

  $('.buy-apple-button').data("applePriceData", marketApplePrice);
  $('.buy-apple-button').on('click', buyApple);

  $('.buy-banana-button').data("bananaPriceData", marketBananaPrice);
  $('.buy-banana-button').on('click', buyBanana);

  $('.buy-orange-button').data("orangePriceData", marketOrangePrice);
  $('.buy-orange-button').on('click', buyOrange);

  $('.buy-pear-button').data("pearPriceData", marketPearPrice);
  $('.buy-pear-button').on('click', buyPear);

  $('.sell-apple-button').on('click', sellApple);
  $('.sell-banana-button').on('click', sellBanana);
  $('.sell-orange-button').on('click', sellOrange);
  $('.sell-pear-button').on('click', sellPear);


});

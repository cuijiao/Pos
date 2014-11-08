function Item(barcode, name, unit, price) {
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price || 0.00;
}

Item.prototype.inPromotions = function () {
    var promotions = loadPromotionsRepo()["BUY_TWO_GET_ONE_FREE"];
    var isPromotions = false;
    for (var i = 0; i < promotions.length; i++) {
        if (this.barcode == promotions[i]) {
            isPromotions = true;
            break;
        }
    }
    return isPromotions;
}

Item.prototype.cost = function (num) {
    return (this.price * num).toFixed(2);
}
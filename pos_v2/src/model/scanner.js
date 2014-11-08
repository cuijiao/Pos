function Scanner(tag) {
    this.tag = tag
}

Scanner.prototype.scan = function (inputs) {
    var shoppingList = {};

    for (var i = 0; i < inputs.length; i++) {
        var splitInfo = inputs[i].split(this.tag);
        var barcode = splitInfo[0];
        var num = splitInfo.length > 1 ? splitInfo[1] : 1;
        if (isNaN(shoppingList[barcode])) {
            shoppingList[barcode] = 0;
        }
        shoppingList[barcode] += num;
    }

    return shoppingList
}
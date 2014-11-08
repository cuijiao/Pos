function Calculator() {
    this.itemsRepo = loadItemsRepo();
}

Calculator.prototype.calculate = function (shoppingList) {
    var invoiceItemList = []
    var repo = this.itemsRepo;

    $.each(shoppingList, function (barcode, totalNum) {

        var item = repo[barcode];
        var paidNum = totalNum;
        if (item.inPromotions()) {
            paidNum = Math.floor(totalNum / 3) * 2 + (totalNum - Math.floor(totalNum / 3) * 3)
        }
        var cost = item.cost(paidNum)
        invoiceItemList.push(new InvoiceItemTemplate(item, paidNum, totalNum, cost))
    })

    return invoiceItemList;
}
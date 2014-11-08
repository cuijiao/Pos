function InvoiceItemTemplate(item, paidNum, totalNum, cost) {
    this.barcode = item.barcode;
    this.name = item.name;
    this.unit = item.unit;
    this.unitPrice = parseFloat(item.price).toFixed(2);
    this.paidNum = paidNum;
    this.totalNum = totalNum;
    this.cost = parseFloat(cost);
}

InvoiceItemTemplate.prototype.isPromotionItemList = function () {
    return this.totalNum > this.paidNum ? true : false;
}

InvoiceItemTemplate.prototype.saveMoney = function () {
    return (this.totalNum > this.paidNum) * this.unitPrice;
}

InvoiceItemTemplate.prototype.printShoppingListInfo = function () {
    return "名称：" + this.name + "，数量：" + parseInt(this.totalNum) + this.unit + "，单价：" + this.unitPrice + "(元)，小计：" + this.cost.toFixed(2) + "(元)\n"
}

InvoiceItemTemplate.prototype.printPromotionsInfo = function () {
    return "名称：" + this.name + "，数量：" + (this.totalNum - this.paidNum) + this.unit + "\n"
}
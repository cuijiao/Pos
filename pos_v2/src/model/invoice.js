function Invoice(title) {
    this.title = title;

    this.printBody = function (itemTemplateList) {
        var body = "----------------------\n";
        for (var i = 0; i < itemTemplateList.length; i++) {
            body += itemTemplateList[i].printShoppingListInfo();
        }
        body += "----------------------\n挥泪赠送商品：\n";
        for (var i = 0; i < itemTemplateList.length; i++) {
            if (itemTemplateList[i].isPromotionItemList()) {
                body += itemTemplateList[i].printPromotionsInfo();
            } else {
                continue;
            }
        }
        body += "----------------------\n"
        return body;
    }

    this.printFooter = function (itemTemplateList) {
        var totalCost = 0;
        var saveMoney = 0;
        for (var i = 0; i < itemTemplateList.length; i++) {
            totalCost += itemTemplateList[i].cost;
            saveMoney += itemTemplateList[i].saveMoney();
        }
        return "总计：" + totalCost.toFixed(2) + "(元)\n" + "节省：" + saveMoney.toFixed(2) + "(元)\n" + "**********************";
    }
}

Invoice.prototype.print = function (itemTemplateList) {
    var header = "***<" + this.title + ">购物清单***\n"
    var body = this.printBody(itemTemplateList);
    var footer = this.printFooter(itemTemplateList);
    return header + body + footer;
}
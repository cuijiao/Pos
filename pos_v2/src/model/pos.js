function Pos(name) {
    this.scanner = new Scanner("-");
    this.calculator = new Calculator();
    this.invoice = new Invoice(name)
}

Pos.prototype.read = function (inputs) {
    var shoppingList = this.scanner.scan(inputs);
    var result = this.calculator.calculate(shoppingList);
    return this.invoice.print(result);
}
class OrderItem {
    constructor(ID, OrderID, ProductID, Price, Qty) {
        this.ID = ID;
        this.OrderID = OrderID;
        this.ProductID = ProductID;
        this.Price = Price;
        this.Qty = Qty;
    }
    totalPrice() {
        return this.Price * this.Qty
    }
}

let order = new OrderItem(1, '0001', '0001', 50000, 3);
console.log(order.totalPrice())
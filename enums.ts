const enum OrderStatus {
	PENDING = 0,
	SHIPPED = 50,
	DELIVERED = 'delivered',
	RETURNED = 'returned',
}

let orderStatus: OrderStatus = OrderStatus.PENDING;
function isShipped(status: OrderStatus): boolean {
    return status === OrderStatus.SHIPPED;
}

console.log(isShipped(orderStatus));
console.log(isShipped(OrderStatus.SHIPPED));

"use strict";
let orderStatus = 0 /* OrderStatus.PENDING */;
function isShipped(status) {
    return status === 50 /* OrderStatus.SHIPPED */;
}
console.log(isShipped(orderStatus));
console.log(isShipped(50 /* OrderStatus.SHIPPED */));

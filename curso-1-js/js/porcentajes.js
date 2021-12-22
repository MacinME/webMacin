const coupons = [
    "CUPON1",
    "CUPON2",
    "CUPON3"
];

// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento
}

function calculatePriceWithDiscount() {
    const price = document.getElementById("price");
    const priceValue = price.value;
    const coupon = document.getElementById("coupon");
    const couponValue = coupon.value;

    let descuento;

    switch (couponValue) {
        case coupons[0]:
            descuento = 15;
            break;
        case coupons[1]:
            descuento = 30;
            break;
        case coupons[2]:
            descuento = 25;
            break;
        default:

    }

    const result = calcularPrecioConDescuento(priceValue, descuento);
    const saved = priceValue - result;
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento son: $" + result;
    const savedid = document.getElementById("saved");
    savedid.innerText = "Dinero ahorrado: " + saved;
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });
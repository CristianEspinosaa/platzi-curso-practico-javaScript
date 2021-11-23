
function calcularProductoConDescuento(valorProducto, descuento){
    return (valorProducto * (100 - descuento)) / 100
}

function calcularDescuento(){
    const inputPrice = document.getElementById("inputPrice")
    const pricevalue = inputPrice.value

    const inputDiscount = document.getElementById("inputDiscount")
    const discountValue = inputDiscount.value

    const precioConDescuento = calcularProductoConDescuento(pricevalue, discountValue);

    const parrafo = document.getElementById("resultPrice");
    parrafo.innerText = "El precio de tu producto con el descuento del %" + discountValue + 
    " es $" + precioConDescuento

}
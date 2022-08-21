document.getElementById('cupon-btn').addEventListener('click', function(){
    const getPrice = document.getElementById('price')
    const price = parseFloat(getPrice.innerText)
    console.log(price)
})
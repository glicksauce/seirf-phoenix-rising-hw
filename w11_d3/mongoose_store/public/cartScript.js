$(() => {
    //recreate shopping cart array using jquery
    let cartLength = $('.cart').length
    let cartArray = []
    let finalCart = []
    let searchIndex = -2;

    for (i=0;i<cartLength;i++){
        cartArray.push($('.cart')[i].innerHTML)
    }

    //redistribute cart by item name
    for (j=0;j<cartArray.length;j++){

        //gets index where item is found
        searchIndex = finalCart.findIndex( ({name}) => name == cartArray[j] )

        //pushes new item into array
        if (searchIndex == -1 ){
            finalCart.push(
                {
                    name: cartArray[j],
                    qty: 1
                }
            )
        //increases qty of found item
        } else  {
            finalCart[searchIndex].qty += 1;
        }
    }

    //hide origional stuff
    $('.container').empty();
    console.log(cartArray)
    console.log(finalCart)

    for (let element of finalCart){
        console.log(typeof element)
        if (element.name.length > 0){
            $product = $('<div>').text(element.name).addClass("cart")
            $qty = $('<div>').text(element.qty).addClass("qty")
            $('.container')
                .append($product)
                .append($qty)
        }
    }



})
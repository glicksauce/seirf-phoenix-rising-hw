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
        if (searchIndex == -1){
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

    console.log(cartArray)
    console.log(finalCart)
})
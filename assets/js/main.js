function FindOutPrice(){
    
    let valueAge = parseInt( document.getElementById('inputAge').value );
    
    let valueDistance = parseFloat( document.getElementById('inputDistance').value );

    const kmPrice = 0.21;

    let ticketPrice = parseFloat( valueDistance * kmPrice );

    let kidDiscount = ( ( ticketPrice / 100 ) * 20 );

    let seniorDiscount = ( ( ticketPrice / 100 ) * 40 );

    let kidPrice = ticketPrice - kidDiscount;

    let seniorPrice = ticketPrice - seniorDiscount;

    if ( valueAge < 18 ){
        ticketPrice = kidPrice.toFixed(2)
    } else if ( valueAge > 65 ){
        ticketPrice = seniorPrice.toFixed(2)
    } else {
        ticketPrice = ticketPrice.toFixed(2)
    }

    document.getElementById('finalPrice').innerHTML = "The price of your journey will be: " +ticketPrice+ " € !!";
}
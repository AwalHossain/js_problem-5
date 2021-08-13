//-------------------------Problem-2 --------------------------------------

function totalSales(shirtQuantity, pantQuantity, shoeQuantity){
    //shirt, pant & shoe fixed price variable
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

// main condition start from here
// if shirt quantity less than zero than it will show error message 
    if(shirtQuantity <0 || pantQuantity < 0 || shoeQuantity < 0){               
        return "Please inpul only valid or positive number"
    }
    // Here, this condition will check if the quantity is number or not
    else if(typeof shirtQuantity == "number" && typeof pantQuantity == "number" && typeof shoeQuantity == "number"){
        const totalShirtPrice = shirtQuantity * shirtPrice;
        const totalPantPrice  = pantPrice * pantQuantity;
        const totalShoePrice  = shoePrice * shoeQuantity;
        const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;

        return totalPrice;
    }
    else{
        return "Please input all number"
    }



}

const shirtQuantity =2;
const pantQuantity =1;
const shoeQuantity =2;
const quantity = totalSales(shirtQuantity, pantQuantity, shoeQuantity)
// console.log(quantity);


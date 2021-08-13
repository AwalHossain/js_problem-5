//-------------------------PROBLEM -3 --------------------------------------

function deliveryCost(deliveryQuantity) {
// different quanty different price variable
    const first100Cost = 100;
    const second100Cost = 80;
    const restCost = 50;

    //Condition for Delivery Cost 
// if it is only number & postive value then it will only work
    if (typeof deliveryQuantity == 'number' && deliveryQuantity > 0) { 
        if (deliveryQuantity > 0 && deliveryQuantity <= 100) {
            const totalCost = first100Cost * deliveryQuantity;
            return totalCost;
        } 
        //Condition for 101-200 piece shirt
        else if (deliveryQuantity >= 101 && deliveryQuantity <= 200) {  
            const first100DeliveryCost = 100 * first100Cost;
            const restShirt = deliveryQuantity - 100;
            const second100DeliveryCost = restShirt * second100Cost;
            const totalCost = first100DeliveryCost + second100DeliveryCost;

            return totalCost;
        } 
        ///Condition for rest piece of shirt
        else {                                                    
            const first100DeliveryCost = 100 * first100Cost;
            const secon100DeliveryCost = 100 * second100Cost;
            const restShirt = deliveryQuantity - 200;
            const restDeliveryCost = restShirt * restCost;
            const restTotaltCost = first100DeliveryCost + secon100DeliveryCost + restDeliveryCost;

            return restTotaltCost;
        }
    }

    // if condition is not a number then it will show else value
    else {
        return "Please enter valid and positive number"
    }


}

const quanty = 200;
const totalDeliveryCost = deliveryCost(quanty);
// console.log(totalDeliveryCost);


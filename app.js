function updateProduct( product ,price,  isIncresing ){
    const productInput = document.getElementById(product + '-number');
    let productNumber =productInput.value;
    if(isIncresing == true ){
        productNumber = parseFloat(productNumber) + 1;
    }
    else if(productNumber > 0 ){
        productNumber = parseFloat(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total 
    const productTotal =   document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price ;

    // calculateTotal function is calling 
    calculateTotal();
}



function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseFloat(productInput.value);
    return productNumber;
}



function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;

    // update on the html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = taxAmount;
    document.getElementById('total').innerText = totalPrice;
}




// phone increase decrease event handaler 
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProduct('phone', 1219,  true );
})




document.getElementById('phone-minus').addEventListener('click', function(){
    updateProduct('phone', 1219,  false );
})



// casing plus button even handler
document.getElementById('case-plus').addEventListener('click', function(){
    // calling function
    updateProduct('case' , 59 , true);
    // const caseInput = document.getElementById('case-number');
    // const caseNumber =parseFloat(caseInput.value);
    // caseInput.value = caseNumber + 1;
    // console.log(caseNumber);
})




// casing minus button even handler
document.getElementById('case-minus').addEventListener('click', function(){
    // calling function
    updateCase('case' , 59 , false);
    // const caseInput = document.getElementById('case-number');
    // const caseNumber =parseFloat(caseInput.value);
    // 
    // console.log(caseNumber);
})

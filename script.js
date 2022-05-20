// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]
const mystery6 = [7, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]
const mystery7 = [8, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]
const smallerBatch = [mystery6, mystery7, mystery1, mystery2, mystery3, invalid3, invalid4, invalid5]
const smallerBatch2 = [mystery1, mystery2, mystery3]
const smallerBatch3 = [mystery1, mystery6, mystery3]
// Add your functions below:



//this function takes a double digit number and adds them together

function summedDigits (number){
    let array = number.toString().split('');    
    let i = array[0]; 
    let j = array[1];
    return Number(i) + Number(j);
    
} 

//console.log(summedDigits(67));
//expected output console.log(summedDigits(67)); = 13

//This one takes a mixed array including single digit and double digit numbers and transforms the double digits into single digits by subtracting 9

function toSingleDigits(array){
    let newNewArray = [];
    for (i = 0; i < array.length; i++){
        if (array[i] > 9){
            newNewArray.push(summedDigits(array[i]));
        } else {
            newNewArray.push(array[i]);
        }
    }
    return newNewArray;
}

const exemplar = [4, 2, 4, 10, 0, 6, 8, 12, 9, 2, 0, 16, 4, 8, 3]

//console.log(toSingleDigits(exemplar)); 

//expected output: [4, 2, 4, 1, 0, 6, 8, 3, 9, 2, 0, 7, 4, 8, 3]


//This function tests a single array to test whether that single credit card number is valid or invalid

function pusher (array){
    
    let reverseArray = [];
    for (i = (array.length - 1); i >= 0; i--){
        reverseArray.push(array[i]);
    }
    
    let newArray = [];
    for (m = 0; m < reverseArray.length; m++){
        if ((m % 2) === 0){
            newArray.push((reverseArray[m]));

        } else {
            newArray.push(reverseArray[m]*2);
        }
    }
    
    let singleDigitsArray = toSingleDigits(newArray);    

    let k = 0;
for (j = 0; j < singleDigitsArray.length; j++){
    k = k + singleDigitsArray[j];
}
if ((k % 10) === 0){
    return true;
} else {
    return false;
};
};

//copy: const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

//copy: const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]

//console.log(pusher(valid5));
//expected output: true
//console.log(pusher(invalid1));
//expected output: false

//This function tests an array of cards and returns an array containing the false card numbers

function findInvalidCards(nestedArray) {
    let falseCards = [];
    for (k=0; k < nestedArray.length; k++){
       
        if (pusher(nestedArray[k]) === false){
            falseCards.push(nestedArray[k]);
        } 
        

    }
return falseCards;

}

//console.log(findInvalidCards(batch));
//expected output: [Array(16), Array(16), Array(15), Array(16), Array(16), Array(15), Array(19), Array(16)]


//This function filters credit card by provider but doesn't check to see if their false, ie input should be an array of cards already tested false

function filterByProvider(array) {
    let issuedFalseCards = [];          
        for (x = 0; x < array.length; x++){            
        if (array[x][0] === 3 && issuedFalseCards.includes('Amex') === false){
            issuedFalseCards.push('Amex');
        } if (array[x][0] === 4 && issuedFalseCards.includes('Visa') === false){
            issuedFalseCards.push('Visa');
        } if (array[x][0] === 5 && issuedFalseCards.includes('Mastercard') === false){
        issuedFalseCards.push('Mastercard');
        } if (array[x][0] === 6 && issuedFalseCards.includes('Discover') === false){
            issuedFalseCards.push('Discover');
    } if (array[x][0] !== 3 && array[x][0] !== 4 && array[x][0] !== 5 && array[x][0] !== 6 && issuedFalseCards.includes('Company not found') === false){
        issuedFalseCards.push('Company not found');
    }
    
    }
    return issuedFalseCards;
}
    
//console.log(filterByProvider(batch));
//expected output ['Visa', 'Mastercard', 'Amex', 'Discover']

//This function does everything; you input a batch, it filters it for false cards and then filters the false cards by provider

function companyAlert (nestedArray2) {
    let falseCards = findInvalidCards(nestedArray2);
    
    let issuedFalseCards = [];          
        for (x = 0; x < falseCards.length; x++){   
                 
        if (falseCards[x][0] === 3 && issuedFalseCards.includes('Amex') === false){
            issuedFalseCards.push('Amex');
        } if (falseCards[x][0] === 4 && issuedFalseCards.includes('Visa') === false){
            issuedFalseCards.push('Visa');
        } if (falseCards[x][0] === 5 && issuedFalseCards.includes('Mastercard') === false){
        issuedFalseCards.push('Mastercard');
        } if (falseCards[x][0] === 6 && issuedFalseCards.includes('Discover') === false){
            issuedFalseCards.push('Discover');
    } if (falseCards[x][0] !== 3 && falseCards[x][0] !== 4 && falseCards[x][0] !== 5 && falseCards[x][0] !== 6 && issuedFalseCards.includes('Company not found') === false){
        issuedFalseCards.push('Company not found');
    }
    
    }
    return issuedFalseCards;
}

//console.log(companyAlert(batch));
//expected output: ['Visa', 'Mastercard', 'Amex', 'Discover']

//console.log(companyAlert(smallerBatch));
//expected output: ['Company not found', 'Amex', 'Discover', 'Mastercard']

//console.log(companyAlert(smallerBatch2));
//expected output: ['Amex', 'Discover']

//console.log(companyAlert(smallerBatch3));
//expected output: ['Amex', 'Company not found', 'Discover']

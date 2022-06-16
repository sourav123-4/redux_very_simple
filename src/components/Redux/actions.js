export const createAccount = (name,age,amount)=>{
    return {
        type : "CREATE_ACCOUNT",
        payload : {
            name:name,
            age:age,
            amount:amount,
        }
    }
}

export const deleteAccount = (name) =>{
    return {
        type : "DELETE_ACCOUNT",
        payload : {
            name:name,
        }
    }
}

export const withdrawAmmount = (name,ammount) =>{
    return {
        type : "WITHDRAW_AMOUNT",
        payload : {
            name : name,
            ammount : ammount,
        }
    }
}
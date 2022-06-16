// import { CREATE_ACCOUNT,DELETE_ACCOUNT, WITHDRAW_AMOUNT } from "./action-type";

const initialState = {
    name:[],
    age:[],
    amount:[],
};

const accountReducer = (state=initialState,action)=>{
    if(action.type === "CREATE_ACCOUNT"){
        return {...state,...action.payload}
    }else if(action.type === "DELETE_ACCOUNT"){
        return state.filter(name => name !== action.payload.name)
    }else if(action.type === "WITHDRAW_AMOUNT"){
        return Number(state.amount) - Number(action.payload.amount)
    }
    return state
}

export default accountReducer;
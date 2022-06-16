import React from 'react'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux'
import { Button } from 'semantic-ui-react';
import { createAccount, deleteAccount, withdrawAmmount } from './components/Redux/actions';
const App = ()=>{
  const state = useSelector(state =>state.accountReducer)
  const dispatch = useDispatch();

  console.log(state)
    return (
      <div>
        <Button content="ADD" onClick={()=>dispatch(createAccount("sourav","22",220000))}/>
        <Button content="DELETE" onClick={()=>dispatch(deleteAccount("sourav"))}/>
        <Button content="WITHDRAW" onClick={()=>dispatch(withdrawAmmount("sourav",10000))}/>
       <h1>name :  {state?.name}</h1>
      </div>
    )
}


export default App;

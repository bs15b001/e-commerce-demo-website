import SHOP_DATA from './shop.data.js';
const INITIAL_STATE={


    collections:SHOP_DATA
}


const shopreducer=(state=INITIAL_STATE,action)=>{
    console.log(state,SHOP_DATA)

    switch(action.type){
        default:
            return state
    
    



    }



}

export default shopreducer;
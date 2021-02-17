import {createSelector} from 'reselect';
const selectshop=state=>state.shop


const collection_id_map={
hats:1,
sneakers:2,
jackets:3,
mens:4,
womens:5


}

export const selectcollections=createSelector(
[selectshop],
shop=>shop.collections

)


export const selectcollection=collecionURLparams=>createSelector(
    [selectcollections],
    collections=>collections.find(collection=>collection.id===collection_id_map[collecionURLparams])
    
    )
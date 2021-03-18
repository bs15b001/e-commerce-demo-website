import {createSelector} from 'reselect';
const selectshop=state=>state.shop




export const selectcollections=createSelector(
[selectshop],
shop=>shop.collections

)

export const selectCollectionsForPreview = createSelector(
    [selectcollections],
    collections => Object.keys(collections).map(key => collections[key])
  );



export const selectcollection = collectionUrlParam =>
  createSelector(
    [selectcollections],
    collections => collections[collectionUrlParam]
  )
import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component'
import {selectcollection} from '../../redux/shop/shop.selector'

import './collection.styles.scss';

const collectionpage=({match})=>{
    console.log(match.params.categoryID);
    return(
        <div>collection page</div>
    )

}


export default collectionpage;
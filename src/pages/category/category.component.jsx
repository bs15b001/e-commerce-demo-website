import React from 'react';
import './category.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectcollection} from '../../redux/shop/shop.selector'
import {connect} from 'react-redux';

const categoryPage=({collection})=>{
    
    console.log(collection)
    
    return (

    <div className='category'>
        <h2>
            categoryistpage
        </h2>

    </div>


)
}

const mapStateToProps=(state,ownProps)=>({
    collection:selectcollection(ownProps.match.params.collectionID)(state)
    
    
    })


export default categoryPage;
import React from 'react';

import {connect} from 'react-redux';


import {selectcollections} from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component'
import {selectcollection} from '../../redux/shop/shop.selector'

import './collection.styles.scss';

const Collectionpage = ( {match,prop,collection} ) => {
    console.log(match);
    console.log(prop);
    console.log(collection);
    const {title,items}=collection
    return (
      <div className='collection-page'>
        <h2 className='title'>{title}
        </h2>
        <div className='items'>
            {items.map(item=>(
            <CollectionItem key={item.id} item={item}></CollectionItem>))}
        </div>
        </div>     
    );
  };

const mapStateToProps = (state, ownProps) => ({
    collection: selectcollection(ownProps.match.params.collectionId)(state),
    prop:ownProps.match.params.collectionId,

    collections:selectcollections


  }
  
  );


export default connect(mapStateToProps)(Collectionpage);
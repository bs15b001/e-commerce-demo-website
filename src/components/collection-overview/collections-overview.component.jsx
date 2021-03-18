import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.jsx'
import {selectcollections} from '../../redux/shop/shop.selector';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const Collectionoverview=({collections})=>(
    <div className='collection-overview'>
         {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}


    </div>
)

const mapstatetoprops=createStructuredSelector({
    collections:selectCollectionsForPreview
  })


  export default connect(mapstatetoprops)(Collectionoverview);
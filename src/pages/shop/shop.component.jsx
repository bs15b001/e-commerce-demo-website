
import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import Collectionoverview from '../../components/collection-overview/collections-overview.component'
import {Route} from 'react-router-dom';
import Collectionpage from '../collection/collection.component'
import categoryPage from '../category/category.component';

const ShopPage = ({match})=>(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={Collectionoverview}></Route>
        <Route path={`${match.path}/:collectionId`} component={Collectionpage}></Route>
      </div>
    );

export default ShopPage;

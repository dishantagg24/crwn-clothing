import React from 'react'

import CollectionsOverview from '../../components/collection-overview/collections-overview.component.jsx';

const ShopPage = ({ collections }) =>  (
    <div className='shop-page'>
        <CollectionsOverview />
    </div>
);

export default ShopPage;
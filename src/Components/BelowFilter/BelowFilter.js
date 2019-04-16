import React from 'react';
import './BelowFilter.css';

const BelowFilter = () => (
    <section className={'below_filter_block'}>
        <p className='below_filter_block__rugs-quantity'>768 Rugs</p>
        <select className='below_filter_block__sort'>
            <option selected value="">Sort</option>
        </select>
    </section>
);

export default BelowFilter;


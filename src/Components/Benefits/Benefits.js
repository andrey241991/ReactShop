import React, { Component } from 'react';
import './Benefits.css';
import img_benefit_1 from '../../img/img_benefit_1.png'; 
import img_benefit_2 from '../../img/img_benefit_2.png'; 
import img_benefit_3 from '../../img/img_benefit_3.png'; 
import img_benefit_4 from '../../img/img_benefit_4.png'; 

function Benefits(){
    return (
            <div className='benefits'>
                    <div className='benefits_item'>
                        <img src={img_benefit_1} alt='60-Day Trial'/>
                        <div className='benefits_item_description'>
                            <p>60-Day Trial</p>
                            <a href='#'>Learn More</a>
                        </div>
                    </div>

                    <div className='benefits_item'>
                        <img src={img_benefit_2} alt='Free Shipping & Returns'/>
                        <div className='benefits_item_description'>
                            <p>Free Shipping & Returns</p>
                            <a href='#'>Learn More</a>
                        </div>
                    </div>

                    <div className='benefits_item'>
                        <img src={img_benefit_3} alt='As low as 0% APR with Affirm<'/>
                        <div className='benefits_item_description'>
                            <p>As low as 0% APR with Affirm</p>
                            <a href='#'>Pre-Qualify Now</a>
                        </div>
                    </div>

                    <div className='benefits_item benefits_item--hide'>
                        <img src={img_benefit_4} alt='Message Us or Call Us'/>
                        <div className='benefits_item_description'>
                            <p>Message Us or</p>
                            <a href='#'>Call Us at 1 – 888 – 888 – 8888</a>
                        </div>
                    </div>
            </div>
      );
}
export default Benefits;

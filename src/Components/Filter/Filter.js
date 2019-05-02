import React, { Component } from 'react';
import './Filter.css';

const Filter = () => {
    return (
        <section className='filter'>
            <div className='filter_block'>
                <button>
                    Size
                </button>
                <button>
                    Color
                </button>
                <button>
                    Room
                </button>
                <button>
                    Price
                </button>
                <button>
                    Material
                </button>
                <button>
                    Construction
                </button>
                <button>
                    Style
                </button>
            </div>
        </section>
    );
}
export default Filter;

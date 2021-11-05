import { useState } from 'react';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import './featuredInfo.scss';

function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className='infoTitle'>Revenue</span>
                <div className='moneyContainer'>
                    <span className='revenue'>$2,415</span>  
                    <span className='change'>-11.4% <ArrowDownward className='infoIcon negative'/> </span>                  
                </div>
                <span className='info'>Compared to last Month</span>
            </div>
            <div className='featuredItem'>
                <span className='infoTitle'>Sales</span>
                <div className='moneyContainer'>
                    <span className='revenue'>$4,415</span>  
                    <span className='change'>-1.4% <ArrowDownward className='infoIcon negative'/> </span>                  
                </div>
                <span className='info'>Compared to last Month</span>
            </div>
            <div className='featuredItem'>
                <span className='infoTitle'>Cost</span>
                <div className='moneyContainer'>
                    <span className='revenue'>$10,415</span>  
                    <span className='change'>+15.4% <ArrowUpward className='infoIcon'/> </span>                  
                </div>
                <span className='info'>Compared to last Month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo;

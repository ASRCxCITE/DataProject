import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import {Graph} from "../graphs/Graph.js";
import {Map1} from "./Map1.js";
import './mapDisplay.css';

export class Display extends React.Component
{
    render()
    {
        return(
            <div className='PageDiv'>
                <div className='MapDiv'>
                <Map1/>
                </div>
                
                 <div className='GraphDiv'>
                <Graph/>
                </div> 
            </div>
        );

        
    }

}

ReactDOM.render(<div>
    <Display />
    </div>, document.getElementById('root'));
export default Display;
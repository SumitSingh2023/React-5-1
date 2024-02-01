import React from 'react'
import './DataDisplay.css';
function DataDisplay({data}){

    return(
        <div className='data-display'>
          <h2>Data Display</h2>
          {data.length>0?(
            <div className='card-parent'>
               {data.map((product)=>(

                <div key={product.id} className='card'>
                    <img src={product.image} alt="" className='img'/>
                    <h3 style={{fontFamily:"revert-layer"}}>{product.title}</h3>
                    <h2>Rs {product.price}</h2>
                    <p>{product.category}</p>
                    
                </div>
                
               ))}
            </div>
            

          ):(
            <p>No Data available</p>
          )}
          
        </div>
    )

}

export default DataDisplay
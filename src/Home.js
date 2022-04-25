import React from 'react';
import Itemcard from './Itemcard';
import data from './data';

const Home = () => {
    console.warn(data.productData)

    return (
        <>
            <h1 className='text-center mt-3'>All Items</h1>
                <section className='py-4 container'></section>
                    <div className='row justify-content-center '>
                        {data.productData.map((item, index)=>{ 
                            return(
                                <Itemcard img={item.img} title="title" desc={item.desc} price={item.price} key={index}/>
                            )
                        })}

                    </div>
        </>
    );
}; 

export default Home;
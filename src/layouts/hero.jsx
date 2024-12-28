import React from 'react';



function Hero({title}) {
    return (
        <>
            
                
                    <div className="bg-hero bg-no-repeat bg-center h-[50vh] flex items-center" >
                        <div className=" container">
                            <h1 className="font-bold text-6xl lg:text-8xl text-white">{title}.</h1>
                            
                        </div>

                    </div>
              
        

        </>
    );
}

export default Hero;
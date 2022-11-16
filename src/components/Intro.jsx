import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            {/* <img src={imgUrl}
                alt="portfolio"
                className="w-half h-36 md:h-48 object-cover rounded-md" 
                /> */}
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Armando Espinoza</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Developer/Engineer Student</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                I am Armando Espinoza pursuing a Computer Science Major at the University of Houston. 
                <br />
                My expected graduation date is May 2024.
                <br />
                Currently in search of a internship for Summer 2023!
            </p>
        </div>
    )
}

export default Intro;
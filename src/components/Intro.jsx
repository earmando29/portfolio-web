import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Armando</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer Student</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                I am Armando Espinoza, 
                currently studying Computer Science at the University of Houston. 
                <br />
                Expected graduation date is May 2024
            </p>
        </div>
    )
}

export default Intro;
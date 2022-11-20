import React from 'react';
import Pdf from '/assets/Resume_Armando_Espinoza.pdf'

function Intro() {
    return (
        <div id="intro" className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            {/* <img src="public/assets/cowboy.jpg"
                alt="Cowboy Armando"
                className="w-half h-36 md:h-48 object-cover rounded-md" 
                />  */}
            <h1 className="text-4xl md:text-7xl text-stone-800 dark:text-white mb-1 md:mb-3 font-bold">Armando Espinoza</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Developer/Engineer Student</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                Welcome! 😃 I am {' '} 
                <a 
                    href={Pdf} 
                    target='_blank'
                    className="text-red-500 dark:text-pink-500 hover:underline underline-offset-2 decoration-2 decoration-blue-500"
                    alt="Resume"
                >
                    Armando Espinoza
                </a> 
                {' '} pursuing a Computer Science Major at the University of Houston. 
                <br />
                Currently in search of an internship for Summer 2023!
            </p>
        </div>
    )
}

export default Intro;
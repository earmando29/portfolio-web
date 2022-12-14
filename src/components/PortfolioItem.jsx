import React from "react";

function PortfolioItem({ title, imgUrl, description, stack, link }) {
    return (
        // <a 
        //     href={link}
        //     target="_blank"
        //     rel="noopener noreferrer"
            // className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
        // >
            <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
                <a 
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"

                >
                    <img src={imgUrl}
                    alt="portfolio"
                    className="w-full h-36 md:h-48 object-cover cursor-pointer" 
                />
                </a>
                <div className="w-full p-4 dark:text-white"> 
                    <h3 className="text-lg md:text-xl mb-2 md:mv-3 font-semibold">
                        {title}
                    </h3>
                    <p className="text-smflex mb-3 justify-center leading-none text-stone-600 dark:text-stone-400">{description}</p>
                    <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                        {stack.map(item => (
                            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                                {item}
                            </span>    
                        ))}
                    </p>
                </div>
            </div>
        // </a>
    )
}

export default PortfolioItem;
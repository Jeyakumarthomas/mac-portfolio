import React, { useRef } from 'react';

const renderText = (text,className,baseWeight=400) => {
    return [...text].map((char,i)=> (
        <span
            key={i}
            className={className}
            style={{fontVariationSettings: `'wght' ${baseWeight}`}}>
            {char===' ' ? '\u00A0' : char }
            </span>));
} ;

const Welcome = () => {
    const titleRef = useRef(null);
    const subTitleRef = useRef(null);

  return (   
    <section id="welcome">
            <p ref={subTitleRef}>{renderText("Hay, I am Jeyakumar! welcome to my",'text-3xl font-georama',100)}</p>
            <h1 ref={titleRef} className='mt-7'>{renderText("portfolio",'text-9xl font-georama',100)}</h1>

            <div className='small-screen'>
                <p>This portfolio is designed for desktop and tablet screens only </p>
            </div>
    </section>
    
  )
}

export default Welcome
import React from 'react';

const SlideContent = ({slides,currentPage}) => {
    return ( 
        <div className="border mt-3 p-3">
            <h1>{slides[currentPage].title}</h1>
            <p>{slides[currentPage].text}</p>
        </div>
     );
}
 
export default SlideContent;
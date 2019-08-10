import React from 'react';


const Singlepost = ({title, imgsource, content, pressed}) => {
    return(
        <article onClick={pressed} className="article-container">
            <h2>{title}</h2>
            <img className="article-image" src={imgsource} alt={`articleimage for ${title}`}/>
            <div className="article-text-container">
            <p>{content}</p>
            </div>
        </article>
    )
}
export default Singlepost;
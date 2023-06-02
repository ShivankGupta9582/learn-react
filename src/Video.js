import React from 'react';
import ReactDOM from 'react-dom/client';



// export default Video;

const src = "https://www.youtube.com/embed/d15DP5zqnYE";

const Video = () => {
  return (
    <iframe
      width="560"
      height="315"
      src={src}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />
    
  );
};
// function Video({video}){
//     return(
//         <div>
//             <Thumbnail video={video}/>
//             <a href={video.url}>
//                 <h3>{video.title}</h3>
//                 <p>{video.description}</p>
//             </a>
//             <likeButton vide={video}/>
//         </div>
//     );
// }
export default Video;
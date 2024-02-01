import ImageItem from "./ImageItem";
import React from 'react';


function ImageList({imagesPlaceHolder}) {
return ( 

<div className="imageList">

{ imagesPlaceHolder.map((image, index)=>{
   return  <ImageItem key={index} image={image}/>;

})}
</div>
);
}

export default ImageList;
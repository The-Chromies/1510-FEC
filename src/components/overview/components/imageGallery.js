import React, { useState, useEffect } from 'react';


function ImageGallery({ styles }) {
  // let url = styles.results[0].photos[0].url;
  const getURL = () => {
    let url = styles;
    console.log(typeof url.results);
    for (let key in url.results) {
      // console.log(url.results[0])
      // console.log(key)
      console.log(url.results['0'])
    }
  }

  useEffect(() => {
    getURL();
  }, [ styles ]);

  return (
    <div className="image-gallery">
      Image Gallery
      {/* <img src={url}></img> */}
    </div>
  );
}

export default ImageGallery;
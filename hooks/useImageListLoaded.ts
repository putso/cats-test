import React, { ReactNode, useState } from "react";

const useImageListLoaded = (urls: string[]) => {
  const loadImages = async (urls: string[]) => {
    let promistList: Array<Promise<string>> = [];

    urls.forEach((url, i) => {
      const promise = new Promise<string>((res) => {
        const image = new Image();
        image.src = url;
        image.onload = () => {
          console.log('loadimage');
          res("load!!!");
        };
      });
      promistList.push(promise);
    });
    return Promise.all(promistList);
  };
  loadImages(urls);
  return loadImages;
};

export default useImageListLoaded;

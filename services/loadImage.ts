const loadImages = async (urls: string[], handler: (value:number,maxValue:number) => void) => {
  let promistList: Array<Promise<string>> = [];
  let countImageLoaded = 0;
  const MaxCountImgeLoaded = urls.length;
  urls.forEach((url, i) => {
    const promise = new Promise<string>((res) => {
      const image = new Image();
      image.src = url;
      image.onload = () => {
        countImageLoaded++;
        handler(countImageLoaded,MaxCountImgeLoaded);
        res("load!!!");
      };
    });
    promistList.push(promise);
  });
  return Promise.all(promistList);
};
export default loadImages;

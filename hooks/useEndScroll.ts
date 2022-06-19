import React, { useEffect, useMemo, useState } from 'react'
import handler from '../pages/api/hello';
interface useEndScrollProps {
    (
        handler: () => void,
    ): void;
}
const useEndScroll:useEndScrollProps =  (handler) => {
    useEffect(()=> {
    console.log('useEndScroll');
        const scrollHandler = (e:Event) => {
            
            const element = document.documentElement;
            console.log(element.scrollHeight - element.scrollTop,element.clientHeight);
            const checkEndScroll = element.scrollHeight - element.scrollTop - element.clientHeight<100;
            if(checkEndScroll) handler();
        }
       document.addEventListener('scroll', scrollHandler); 
       return ()=> {
        document.removeEventListener('scroll', scrollHandler);
       }
    });
}

export default useEndScroll
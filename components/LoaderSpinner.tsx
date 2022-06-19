import React, { FC } from 'react'
import { selectLoadBar, selectStatus } from '../store/CatsSlice'
import { useAppSelector } from '../store/store'
import { Spinner } from './Spinner'
interface LoaderSpinnerProps {
  status?: string;
}
const LoaderSpinner: FC<LoaderSpinnerProps> = ({status}) => {
    const LoadProgres  = useAppSelector(selectLoadBar);
    const LoadStatus  = useAppSelector(selectStatus);
    
    const getText = () => {
      if(LoadStatus === 'pending') return 'Отправляем запрос';
      if(LoadStatus === 'loadImage') return `Загружаем котиков ${LoadProgres?.currentValue}/ ${LoadProgres?.maxValue}`;
      if(LoadStatus === 'sucsess') return 'Готово';
      return ' ';


    }
    console.log(LoadProgres, getText());
  return <>
     <Spinner text={getText()}/> 
  </>
}

export default LoaderSpinner
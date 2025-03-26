import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {Setfavorite} from '../../Redux/slices/PaginationSlice'



const styles = require('../../styles/main.module.scss');






const Popular = () =>{
    const dispatch = useDispatch()
    const POPULARITEMS = useSelector((state:any)=> state.PaginationSlice.popular)
    const navarr = ['запчасти','моторы', 'шины','электроника','инструменты','аксессуары']
    const [active , setActive] = useState<number>(0)
    const onclickActive = (index:number) =>{

        setActive(index)
    }
const onclickfavorite = (id: number, )=>{
    dispatch(Setfavorite(id))
  
}
const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

    return (
        <div className={styles.Popular__wrapper}>
            <div className={styles.Popular__header}>
                <h2>Популярные товары</h2>
                <ul className={styles.Popular__header_nav}>
                    {navarr.map((Obj, index)=><li key={index} onClick={()=>{onclickActive(index)}}
                     className={ active === index ? styles.Popular__header_itemactive : styles.none}>{Obj}</li>)}
                </ul>
            </div>
            <div className={styles.Popular__items} ref={emblaRef}>
                <ul className={styles.Popular__items_list}>
                    
                    {POPULARITEMS.map((obj:any, index:any)=> <li className={styles.Popular__items_listitem} key={index}>
                   {obj.favorite ? <svg onClick={()=>{onclickfavorite(obj.id)}} className={styles.Popular__items_listsvg} width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 3.435C10.011 -1.964 0 -1.162 0 7.003C0 11.071 3.06 16.484 12 22C20.94 16.484 24 11.071 24 7.003C24 -1.115 14 -1.996 12 3.435Z" fill="#1C62CD" />
</svg>:  <svg onClick={()=>{onclickfavorite(obj.id)}} className={styles.Popular__items_listsvg} width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 8.22892C12.234 7.10892 13.547 1.99992 17.382 1.99992C19.602 1.99992 22 3.55092 22 7.00292C22 10.9099 18.373 15.4729 12 19.6319C5.627 15.4729 2 10.9099 2 7.00292C2 3.51892 4.369 1.99792 6.577 1.99792C10.5 1.99792 11.722 7.12392 12 8.22892ZM0 7.00292C0 11.0709 3.06 16.4839 12 21.9999C20.94 16.4839 24 11.0709 24 7.00292C24 -0.959077 14.352 -2.02508 12 3.26592C9.662 -1.99608 0 -1.00408 0 7.00292Z" fill="black" />
</svg> }
<img src={obj.img} alt=""/>
<h3>{obj.title}</h3>
{obj.price ?  <h4>{obj.price}</h4> : <div> <p>Нет в наличии</p> <a href="#">Сообщить о поступлении</a></div>}
{obj.price ? <button className={styles.Popular__items_listbutton}><svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 0L29.0713 2.5H26.66L22.3175 17.5H5.76875L0 3.75H21.015L20.31 6.25H3.76L7.43125 15H20.4662L24.7563 0H30ZM10.625 18.75C9.59 18.75 8.75 19.59 8.75 20.625C8.75 21.6612 9.59 22.5 10.625 22.5C11.66 22.5 12.5 21.6612 12.5 20.625C12.5 19.59 11.66 18.75 10.625 18.75ZM19.25 10L16.875 18.75C15.84 18.75 15 19.5888 15 20.625C15 21.6612 15.84 22.5 16.875 22.5C17.91 22.5 18.75 21.6612 18.75 20.625C18.75 19.59 17.91 18.75 16.875 18.75L19.25 10Z" fill="white" />
</svg></button> : ''}

                  <button className={styles.Popular__items_listitem__hover}>посмотреть товар</button>  </li>)}
                </ul>
                <button className={styles.Popular__items_prev} onClick={scrollPrev}><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.9673 14.1924L14.9422 1.37269C15.2613 1.05741 15.2613 0.551755 14.9422 0.236466C14.6231 -0.0788221 14.1113 -0.0788221 13.7922 0.236466L0.239328 13.6273C-0.0797759 13.9426 -0.0797759 14.4482 0.239328 14.7635L13.7922 28.1484C13.9487 28.3031 14.1595 28.3864 14.3642 28.3864C14.5689 28.3864 14.7796 28.309 14.9362 28.1484C15.2553 27.8331 15.2553 27.3275 14.9362 27.0122L1.9673 14.1924Z" fill="#2F3035" />
</svg></button>
<button className={styles.Popular__items_next}  onClick={scrollNext} ><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.2143 14.1939L0.239465 27.0137C-0.0796394 27.3289 -0.0796394 27.8346 0.239465 28.1499C0.558568 28.4652 1.07034 28.4652 1.38944 28.1499L14.9423 14.759C15.2614 14.4438 15.2614 13.9381 14.9423 13.6228L1.38944 0.23793C1.2329 0.0832615 1.02217 -2.28882e-05 0.817462 -2.28882e-05C0.612754 -2.28882e-05 0.402025 0.0773125 0.245483 0.23793C-0.0736198 0.553219 -0.0736198 1.05887 0.245483 1.37416L13.2143 14.1939Z" fill="#2F3035" />
</svg></button>
            </div>
           <button className={styles.Popular__watchmore}>Показать еще</button>
        </div>
    )
}



export default Popular
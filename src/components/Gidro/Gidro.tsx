import React, { useState } from "react";
import * as qs from 'qs'
import {Link, useNavigate} from 'react-router-dom'
import { useEffect } from "react";
import { fetchGidro, Setfavorite, SetDeleteItem } from "../../Redux/slices/GidroSlice";
import { useAppDispatch} from "../../Redux/Store";
import { useSelector} from "react-redux";
import Paginations from "./Paginations";
import Filter from "../filter/Filter";



const styles = require('../../styles/main.module.scss');







const Gidro = () =>{
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const adressstring = window.location.search
    const PaginationCurrent = useSelector((state:any)=> state.PaginationSlice.currentPage)
    const PerPage = useSelector((state:any)=> state.PaginationSlice.perPage)
    
    const GidroItems = useSelector((state:any)=> state.GidroSlice.items)
    
    const isMounted = React.useRef(true);
    
    
const GetGidro = async () =>{
    dispatch(fetchGidro({
        PaginationCurrent,
        PerPage
    }))
}


const onclickfavorite = (element:string) =>{
    dispatch(Setfavorite(element))
    
}
const onclickDELETEITEM = (i:number) =>{
    dispatch(SetDeleteItem(i))
    
} 
useEffect(()=>{
    if(window.location.search){
        GetGidro()
        
    }   
    
}, [PaginationCurrent, adressstring,])


   useEffect(()=>{
    if(isMounted.current){
      const queryString = qs.stringify({
        PaginationCurrent,
        PerPage
        
      })
      navigate (`?${queryString}`)
      
    } 
    isMounted.current = true;
   } , [PaginationCurrent, adressstring, PerPage ])
 
  
   React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      

    
      
    }
    
  }, [])

// React.useEffect(()=>{
//     if(isMounted.current){
//         const json =JSON.stringify(GidroItems)
//         localStorage.setItem('state', json)
        
//     }
    
// },[GidroItems, adressstring])



    return (
        <div className={`${styles.Gidro__wrapper} ${styles.container}`}>
            <div className={styles.Gidro__inner}>
            <Filter/>
            <ul className={styles.Gidro__list}>
             {GidroItems.map((item:any, index:number) => <li key={index}>
                    <div className={styles.Gidro__item_wrapper}>
                    <Link to={`${item.id}`} ><button className={styles.Gidro__item_hover}>посмотреть товар</button></Link>
                    <svg onClick={()=>{onclickDELETEITEM(item.id)}} className={styles.Gidro__item_hover__delete} width='60' height='60' version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Icon-Set" transform="translate(-467.000000, -1039.000000)" fill="#000000">
                         <path d="M489.396,1061.4 C488.614,1062.18 487.347,1062.18 486.564,1061.4 L479.484,1054.32 L472.404,1061.4 C471.622,1062.18 470.354,1062.18 469.572,1061.4 C468.79,1060.61 468.79,1059.35 469.572,1058.56 L476.652,1051.48 L469.572,1044.4 C468.79,1043.62 468.79,1042.35 469.572,1041.57 C470.354,1040.79 471.622,1040.79 472.404,1041.57 L479.484,1048.65 L486.564,1041.57 C487.347,1040.79 488.614,1040.79 489.396,1041.57 C490.179,1042.35 490.179,1043.62 489.396,1044.4 L482.316,1051.48 L489.396,1058.56 C490.179,1059.35 490.179,1060.61 489.396,1061.4 L489.396,1061.4 Z M485.148,1051.48 L490.813,1045.82 C492.376,1044.26 492.376,1041.72 490.813,1040.16 C489.248,1038.59 486.712,1038.59 485.148,1040.16 L479.484,1045.82 L473.82,1040.16 C472.257,1038.59 469.721,1038.59 468.156,1040.16 C466.593,1041.72 466.593,1044.26 468.156,1045.82 L473.82,1051.48 L468.156,1057.15 C466.593,1058.71 466.593,1061.25 468.156,1062.81 C469.721,1064.38 472.257,1064.38 473.82,1062.81 L479.484,1057.15 L485.148,1062.81 C486.712,1064.38 489.248,1064.38 490.813,1062.81 C492.376,1061.25 492.376,1058.71 490.813,1057.15 L485.148,1051.48 L485.148,1051.48 Z" id="cross"> </path> </g> </g> </g></svg>
                        {item.stoke === 0 ?  item.favorite !== 0 ? <svg onClick={()=>{onclickfavorite(item.id)}} className={styles.Gidro__item_favorite}width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3.435C10.011 -1.964 0 -1.162 0 7.003C0 11.071 3.06 16.484 12 22C20.94 16.484 24 11.071 24 7.003C24 -1.115 14 -1.996 12 3.435Z" fill="#1C62CD" />
</svg> : <svg onClick={()=>{onclickfavorite(item.id)}} className={styles.Gidro__item_favorite} width="24" height="23" viewBox="0 0 24 23" fill="#1C62CD" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 9.02016C12.234 7.90322 13.547 2.80818 17.382 2.80818C19.602 2.80818 22 4.35494 22 7.79751C22 11.6938 18.373 16.2444 12 20.392C5.627 16.2444 2 11.6938 2 7.79751C2 4.32303 4.369 2.80619 6.577 2.80619C10.5 2.80619 11.722 7.91818 12 9.02016ZM0 7.79751C0 11.8544 3.06 17.2526 12 22.7535C20.94 17.2526 24 11.8544 24 7.79751C24 -0.142736 14.352 -1.20582 12 4.07072C9.662 -1.1769 0 -0.187613 0 7.79751Z" fill="black" />
</svg> : <div className={styles.Gidro__item_sale}>SALE</div> }
                   
<img src={item.imageUrl} alt=""/>
<h3>{item.title}</h3>
{item.stoke  === 0 ? <p>{item.price} ₽</p> : <div className={styles.Gidro__item_nonestoke}><p>Нет в наличии</p> <a href="#">Сообщить о поступлении</a></div>}
<button><svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 0.837952L29.0713 3.33112H26.66L22.3175 18.2901H5.76875L0 4.57771H21.015L20.31 7.07088H3.76L7.43125 15.797H20.4662L24.7563 0.837952H30ZM10.625 19.5367C9.59 19.5367 8.75 20.3744 8.75 21.4066C8.75 22.44 9.59 23.2765 10.625 23.2765C11.66 23.2765 12.5 22.44 12.5 21.4066C12.5 20.3744 11.66 19.5367 10.625 19.5367ZM16.875 19.5367C15.84 19.5367 15 20.3732 15 21.4066C15 22.44 15.84 23.2765 16.875 23.2765C17.91 23.2765 18.75 22.44 18.75 21.4066C18.75 20.3744 17.91 19.5367 16.875 19.5367Z" fill="white" />
</svg></button>
                    </div>
             
                </li>   )}
            </ul>
            
            </div>
            
            <Paginations/>
        </div>
    )







}





export default Gidro
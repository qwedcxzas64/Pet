import { useState } from "react";
import { SetFavoritebysort } from "../../Redux/slices/GidroSlice";
import { useDispatch, useSelector } from "react-redux";



const styles = require('../../styles/main.module.scss');




const Filter = () =>{
    const dispatch = useDispatch()
    let CurrentFavorite = useSelector((state:any)=> state.PaginationSlice.currentFavorite)
    const favoritearr = ['Все', 'Избранное']
    let [favoriteCurrent , SetfavoriteCurrent] = useState<number>(0)
    const onClickFavorite = (i:number) =>{
        if(favoriteCurrent == 0){
            
            dispatch(SetFavoritebysort(i))
            SetfavoriteCurrent(1)
            
            
            
        } else SetfavoriteCurrent(0)
         dispatch(SetFavoritebysort(i))
         
         
        
        
         
        
    }
    return(
        <div className={styles.Filter__wraper }>
            <div className={styles.Filter__sortFavorite}>
                <ul className={styles.Filter__sortFavorite_list}>
                    {favoritearr.map((item, index:number )=> <li key={index} >
                    <svg onClick={()=>{onClickFavorite(index)}} className={favoriteCurrent == index ? styles.Filter__sortFavorite_boxActive : styles.none } width="14" height="14" viewBox="0 0 14 14" color="#C4C4C4" fill="red" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.54" fill-rule="evenodd" clip-rule="evenodd" d="M13 1V13H1V1H13ZM12.4444 0H1.55556C0.7 0 0 0.7 0 1.55556V12.4444C0 13.3 0.7 14 1.55556 14H12.4444C13.3 14 14 13.3 14 12.4444V1.55556C14 0.7 13.3 0 12.4444 0Z" fill="#C4C4C4" />
</svg>
<p>{item}</p>
                    </li>)}
                   
                 
                </ul>
            </div>
        </div>
    )
}



export default Filter
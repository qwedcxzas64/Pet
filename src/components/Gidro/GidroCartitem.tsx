import { useParams, Link, useNavigate} from "react-router";
import axios from "axios";
import React from "react";
import * as qs from 'qs'
const styles = require('../../styles/main.module.scss');



const GidroCartitem = () =>{
    const isMounted = React.useRef(true);
    const {id}:any =useParams()
    const back = useNavigate()
     const fetchItems =()=>{
        axios.get(`https://65aebe7a1dfbae409a757a67.mockapi.io/pizzas/${id}`)
       .then((resp)=>{
        SetProduct(resp.data)
         console.log(resp.data)
        })

     }
     const [Product, SetProduct] = React.useState<{
      id: string, imageUrl : string, title : string, power: number,
    speed: number,
    price: number,
    favorite: number,
    stoke: number
     }>()
    
    
   


    React.useEffect(()=>{
      if(!Product){
        fetchItems()
        isMounted.current = false
      }
      
    },[Product])

  
       if (Product) {
        
        return (
          <div className={`${styles.GidroCartitem_wrapper} ${styles.container}`}>
             <div className={styles.GidroCartitem_imgblock}>
              {Product.stoke ? <button className={styles.GidroCartitem_imgblock__button}>SALE</button> : ''}
               <img src={Product.imageUrl} alt=""/> 
               <div className={styles.GidroCartitem_imgblock__priceblock}>
                  {Product.stoke === 0 ? <p className={styles.GidroCartitem_imgblock__priceblock_oldprice}>{Product.price + 99999}₽</p>
                   : ''} 
                    {Product.stoke === 0  ? <p className={styles.GidroCartitem_imgblock__priceblock_newprice}>{Product.price}₽</p>
                    
                   : ''} 
                   
                {Product.stoke === 0  ?   <a href="#">Нашли дешевле? Снизим цену!</a> : <p>Нет в наличии</p>}
                  
              </div> 
              
            </div> 
            <div className={styles.GidroCartitem_stats}>
             <button  onClick={()=>{back(-1)}} className={styles.GidroCartitem_stats__btnback}>Вернутся назад</button>
              <ul className={styles.GidroCartitem_stats__list}>
                <li>
                  <p>Скорость</p>
                  <p>{Product.speed}км.ч</p>
                </li>
                <li>
                  <p>Мощность</p>
                  <p>{Product.power}л.с</p>
                </li>
              </ul>
            </div>
            
           </div>
          
      )
       }
        
   
    else return <p>ЗАгрузка</p>
}





export default GidroCartitem
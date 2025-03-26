import React from 'react';
import { useForm } from 'react-hook-form';
import { SetADDitem, type Gidro } from '../../Redux/slices/GidroSlice';
import { useAppDispatch} from "../../Redux/Store";
import { useSelector} from "react-redux";
import axios from 'axios';

const styles = require('../../styles/main.module.scss');


const GidroAdditem = () =>{
const dispatch = useAppDispatch()
  
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        mode: 'onBlur'
      });
      const isMounted = React.useRef(true);
     
      const GidroItems = useSelector((state:any)=> state.GidroSlice.items)
      const randomNum = Math.floor(Math.random() * 100);;
      
      
const onSubmit = (data:Gidro) =>{
    axios.post(`https://65aebe7a1dfbae409a757a67.mockapi.io/pizzas`, 
        data = { 
            id: `${randomNum}`,
     imageUrl : data.imageUrl,
      title : data.title,
       power: 77,
    speed: 220,
    price: data.price,
    favorite: 0,
    stoke: data.stoke > 0 ? 0 : 1
        }
    )
    reset()
}


// React.useEffect(()=>{
//     if(GidroItems){
//         const json =JSON.stringify(GidroItems)
//         localStorage.setItem('state', json)
//         isMounted.current = false
//     }
    
// },[GidroItems])



return <div className={`${styles.GidroAdditem_wrapper} ${styles.container}`}>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.GidroAdditem_form}>
    <input {...register('title',{
        required: true,
    })}   placeholder={errors?.title ? ' Заполните поле!' :'Добавьте имя'}/>
    
    <input type='number' {...register('price',{
        required: true,
    })} placeholder={errors?.price ? ' Заполните поле!' :'Добавьте цену'}/>
    <input  type='string'  {...register('imageUrl',{
        required: true,
    })} placeholder={errors?.imageUrl ? ' Заполните поле!' :'Добавьте фото(ссылку на фото)'}/>
    <input  type='number' {...register('stoke',{
        required: true,
    })} placeholder={errors?.stoke ? ' Заполните поле!' :"Добавьте количество на складе"}/> 
    <button  type="submit" >ДОБАВИТЬ</button>
    
    </form>
    
</div>
}



export default GidroAdditem
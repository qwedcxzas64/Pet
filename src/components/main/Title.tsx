import CART from '../../Assets/cartimg.png'
import Paginate from './Paginate';
import { useDispatch, useSelector } from 'react-redux';


const styles = require('../../styles/main.module.scss');



const Title = () =>{
  
  const BannerItems = useSelector((state:any)=>state.PaginationSlice.items)
  let ItemCurrent = useSelector((state:any)=>state.PaginationSlice.currentItem)
    return (
        <div className={`${styles.title__wrapper} ${styles.container}`}>
            <div className={styles.title__banner}>
                {BannerItems.map((obj:any, index:number) =>( ItemCurrent ===  index ? < img key={index} src={obj} alt=''/>: '' ))}
                <div className={styles.paginate}>
                <Paginate />
                </div>
                
            </div>
            <div className={styles.title__cart_wrapper}>
                <div className={styles.title__cart_pricewrapper}>
                    <button>акция</button>
                    <div className={styles.title__cart_price}>
                    <h2>190 000 ₽</h2>
                    <h3>225 000 ₽</h3>
                    <svg className={styles.title__cart_pricesvg} width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.59433 15.7662L59.4054 0.233705" stroke="#C4C4C4" stroke-width="0.5" />
</svg>
                    </div>         
                </div>
                <div className={styles.title__cart_info}>
                    <img src={CART} alt=''/>
                    <h4>Лодочный мотор 
                    Suzuki DF9.9BRS</h4>
                </div>
                <div className={styles.title__cart_footer}>
                    <p>Акция действует до</p>
                    <a href='#'>31.08.2020</a>
                </div>
            </div>
        </div>
    )
}



export default Title;
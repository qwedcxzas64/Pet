import IMAGE1 from '../../Assets/bannerimg1.png'
import IMAGE2 from '../../Assets/bannerimg2.png'


const styles = require('../../styles/main.module.scss');






const Banner = () =>{
    return (
        <div className={styles.Banner_wrapper}>
            <div className={styles.Banner_img}>
                <img src={IMAGE1} alt=''/>
                <img src={IMAGE2} alt=''/>
            </div>
            <p>CКИДКИ <br/>
на все запчасти <br/>
до 70%</p>
<button>ПОСМОТЕТЬ ВСЕ</button>
        </div>
    )
}




export default Banner
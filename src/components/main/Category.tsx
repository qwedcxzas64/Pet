const styles = require('../../styles/main.module.scss')
import CVADRO from '../../Assets/cvadro.png'
import GIDRO from '../../Assets/gidro 1.png'
import MOTOR from '../../Assets/motor.png'
import VEZDEHOD from '../../Assets/vezdehod.png'
import SNOW from '../../Assets/snow 1.png'
import CATER from '../../Assets/cater.png'




 const Category = () => {
    return (
        <div className={styles.category__wrapper}>
            <ul className={styles.category__list}>
                <li>
                    <div className={styles.category__item_title}>
                    <a href="#">
                    Квадроциклы
                    </a>
                    <img className={styles.category__item_title__cvadro} src={CVADRO} alt=''/>
                    </div>
                   
                    <div className={styles.category__item_footer}>
                    <p>Подробее</p>
                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.228824 7.88793C-0.0650263 8.13366 -0.0762935 8.54196 0.203658 8.79989C0.48361 9.05782 0.948767 9.06771 1.24262 8.82198C1.24262 8.82198 5.77719 4.97116 5.78955 4.95998C6.07934 4.69388 6.06851 4.27195 5.76535 4.01758L1.24266 0.178763C0.949277 -0.067399 0.484101 -0.0581923 0.203658 0.199327C-0.0767846 0.456846 -0.0662956 0.865161 0.227086 1.11132L3.71295 4.12125C3.94389 4.32066 3.94393 4.67861 3.71304 4.87807L0.228824 7.88793Z" fill="#C4C4C4" />
</svg>
</div>
                </li>
                <li>
                <div className={styles.category__item_title}> 
                    <a href="#">
                    Гидроциклы
                    </a>
                    <img className={styles.category__item_title__gidro} src={GIDRO} alt=''/></div>
                   
                    <div className={styles.category__item_footer}>
                    <p>Подробее</p>
                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.228824 7.88793C-0.0650263 8.13366 -0.0762935 8.54196 0.203658 8.79989C0.48361 9.05782 0.948767 9.06771 1.24262 8.82198C1.24262 8.82198 5.77719 4.97116 5.78955 4.95998C6.07934 4.69388 6.06851 4.27195 5.76535 4.01758L1.24266 0.178763C0.949277 -0.067399 0.484101 -0.0581923 0.203658 0.199327C-0.0767846 0.456846 -0.0662956 0.865161 0.227086 1.11132L3.71295 4.12125C3.94389 4.32066 3.94393 4.67861 3.71304 4.87807L0.228824 7.88793Z" fill="#C4C4C4" />
</svg>
</div>
                </li>
                <li>
                <div className={styles.category__item_title}> 
                    <a href="#">
                    Катера
                    </a>
                    <img className={styles.category__item_title__cater} src={CATER} alt=''/></div>
                   
                    <div className={styles.category__item_footer}>
                    <p>Подробее</p>
                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.228824 7.88793C-0.0650263 8.13366 -0.0762935 8.54196 0.203658 8.79989C0.48361 9.05782 0.948767 9.06771 1.24262 8.82198C1.24262 8.82198 5.77719 4.97116 5.78955 4.95998C6.07934 4.69388 6.06851 4.27195 5.76535 4.01758L1.24266 0.178763C0.949277 -0.067399 0.484101 -0.0581923 0.203658 0.199327C-0.0767846 0.456846 -0.0662956 0.865161 0.227086 1.11132L3.71295 4.12125C3.94389 4.32066 3.94393 4.67861 3.71304 4.87807L0.228824 7.88793Z" fill="#C4C4C4" />
</svg>
</div>
                </li>
                <li>
                <div className={styles.category__item_title}> 
                     <a href="#">
                    Снегоходы
                    
                    </a>
                    <img className={styles.category__item_title__snow} src={SNOW} alt=''/></div>
                  
                    
                    <div className={styles.category__item_footer}>
                    <p>Подробее</p>
                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.228824 7.88793C-0.0650263 8.13366 -0.0762935 8.54196 0.203658 8.79989C0.48361 9.05782 0.948767 9.06771 1.24262 8.82198C1.24262 8.82198 5.77719 4.97116 5.78955 4.95998C6.07934 4.69388 6.06851 4.27195 5.76535 4.01758L1.24266 0.178763C0.949277 -0.067399 0.484101 -0.0581923 0.203658 0.199327C-0.0767846 0.456846 -0.0662956 0.865161 0.227086 1.11132L3.71295 4.12125C3.94389 4.32066 3.94393 4.67861 3.71304 4.87807L0.228824 7.88793Z" fill="#C4C4C4" />
</svg>
</div>
                </li>
                <li>
                <div className={styles.category__item_title}>
                <a href="#">
                    Вездеходы
                    </a>
                    <img className={styles.category__item_title__vezdehod} src={VEZDEHOD} alt=''/>
                </div>
                   
                    <div className={styles.category__item_footer}>
                    <p>Подробее</p>
                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.228824 7.88793C-0.0650263 8.13366 -0.0762935 8.54196 0.203658 8.79989C0.48361 9.05782 0.948767 9.06771 1.24262 8.82198C1.24262 8.82198 5.77719 4.97116 5.78955 4.95998C6.07934 4.69388 6.06851 4.27195 5.76535 4.01758L1.24266 0.178763C0.949277 -0.067399 0.484101 -0.0581923 0.203658 0.199327C-0.0767846 0.456846 -0.0662956 0.865161 0.227086 1.11132L3.71295 4.12125C3.94389 4.32066 3.94393 4.67861 3.71304 4.87807L0.228824 7.88793Z" fill="#C4C4C4" />
</svg>
</div>
                </li>
                <li>
                <div className={styles.category__item_title}> 
                    <a href="#">
                    Двигатели
                    </a>
                    <img className={styles.category__item_title__motor} src={MOTOR} alt=''/></div>
                   
                    <div className={styles.category__item_footer}>
                    <p>Подробее</p>
                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.228824 7.88793C-0.0650263 8.13366 -0.0762935 8.54196 0.203658 8.79989C0.48361 9.05782 0.948767 9.06771 1.24262 8.82198C1.24262 8.82198 5.77719 4.97116 5.78955 4.95998C6.07934 4.69388 6.06851 4.27195 5.76535 4.01758L1.24266 0.178763C0.949277 -0.067399 0.484101 -0.0581923 0.203658 0.199327C-0.0767846 0.456846 -0.0662956 0.865161 0.227086 1.11132L3.71295 4.12125C3.94389 4.32066 3.94393 4.67861 3.71304 4.87807L0.228824 7.88793Z" fill="#C4C4C4" />
</svg>
</div>
                </li>
            </ul>
        </div>
    )
 }



 export default Category;
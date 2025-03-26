import { Link } from "react-router-dom";

const styles = require('../../styles/main.module.scss');


const HeaderNav = () =>{
    return (
        <div className={`${styles.headerNav__wrapper } ${styles.container}`}>
            <ul className={styles.headerNav__list}>
                <li><Link to='product/additem'>Добавить товар</Link></li>
                <li><a href="#">Катера</a></li>
                <li  className={styles.headerNav__itemactive}> <Link to='/product'>Гидроциклы</Link></li>
                <li><a href="#">Лодки</a></li>
                <li><a href="#">Вездеходы</a></li>
                <li><a href="#">Снегоходы</a></li>
                <li><a href="#">Двигатели</a></li>
                <li ><a href="#">Запчасти</a></li>
            </ul>
        </div>
    )
}


export default HeaderNav
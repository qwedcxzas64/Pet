const styles = require('../../styles/main.module.scss');




const SearchMain = () =>{
    return (
        <div className={styles.SearchMain_wrapper}> 
        <div className={styles.SearchMain_nav}>
            <ul className={styles.SearchMain_nav__list}>
                <li><a href='#'>Поиск по  номеру</a></li>
                <li className={styles.SearchMain_nav__itemactive}><a href='#'>Поиск по марке</a></li>
                <li><a href='#'>Поиск по названию товара</a></li>
            </ul>
        </div>
        <div className={styles.SearchMain_input__wrapper}>
            <input placeholder='Введите марку '></input>
            <button>искать</button>
        </div>
        </div>
    )
}




export default SearchMain


import HeaderNav from "./HeaderNav";
import HeaderTop from "./HeaderTop";

const styles = require('../../styles/main.module.scss');




const Header = () =>{
    return (
        <div className={` ${styles.wrapper} ${styles.container} `}>
            
            <HeaderTop/>
            <HeaderNav/>
        </div>
    )
}


export default Header
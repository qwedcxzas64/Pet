import Banner from "./Banner";
import Category from "./Category";
import Popular from "./Popular";
import SalesOffers from "./SalesOffers";
import SearchMain from "./SearchMain";
import Title from "./Title";

const styles = require('../../styles/main.module.scss');



const Main = () =>{
    return (
<div className={`${styles.wrapper} ${styles.container}`}>
    <Title/>
    <SearchMain/>
    <Category/>
    <Popular/>
    <Banner/>
    <SalesOffers/>
</div>
    )
    
}



export default Main;
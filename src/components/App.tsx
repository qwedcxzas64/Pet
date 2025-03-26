import {  Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';
import Gidro from './Gidro/Gidro';
import GidroCartitem from './Gidro/GidroCartitem';
import GidroAdditem from './Gidro/GidroAdditem';


const styles = require('../styles/main.module.scss');

const App = () =>{
   
    
    return (
        <div>
           
        <Header/>
        <Routes>
           <Route path='/' element={<Main/>} />
           <Route path='/product' element={<Gidro/>}/>
           <Route path='product/:id' element={<GidroCartitem/>}/>
           <Route path='product/additem' element={<GidroAdditem/>}/>
        </Routes>
        <Footer/>
       
    </div>

    )
      
}


export default App;

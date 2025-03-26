import { createSlice, current } from "@reduxjs/toolkit";
import BANNER from '../../Assets/banner.jpg'
import BANNER2 from '../../Assets/banner2.jpg'
import POPPULAR1 from '../../Assets/backpackpopular.png'
import POPPULAR2 from '../../Assets/julletpopular.png'
import POPPULAR3 from '../../Assets/binoclepopular.png'
import POPPULAR4 from '../../Assets/battarupopular.png'
import AUDIO from '../../Assets/audio.png'
import GARMIN from '../../Assets/navigator.png'
import BRELOCK from '../../Assets/brelok.png'
import COSTUME from '../../Assets/costume.png'



const initialState = {
    
 items : [BANNER, BANNER2, BANNER, BANNER2, BANNER,BANNER2 ],
 popular : [
    {
        id: 0,
        img: POPPULAR1,
        price : 9800,
        title : 'Водонепроницаемый рюкзак',
        favorite : false
 } , 
 {
    id: 1,
    img: POPPULAR2,
    price : 6900,
    title : 'Спасательный жилет BRP Mens Airflow PFD',
    favorite : false
} ,
{
    id: 2,
    img: POPPULAR3,
    price : 68800,
    title : 'BRP Audio-Premium System',
    favorite : true
} ,
{
    id: 3,
    img: POPPULAR4,
    price : false,
    title : 'Спасательное снаряжение',
    favorite : false
} , 
{
    id: 4,
    img: POPPULAR3,
    price : 48800,
    title : 'BRP Audio-Premium Syste 2',
    favorite : true
},
{
    id: 5,
    img: POPPULAR1,
    price : 19800,
    title : 'Водонепроницаемый рюкзак v2',
    favorite : false
} ,
{
    id: 6,
    img: AUDIO,
    price : false,
    title : 'BRP Audio-портативная система',
    favorite : true
} ,
{
    id: 7,
    img: GARMIN,
    price : 22400,
    title : 'Garmin Echomap Plus 62cv',
    favorite : false
} ,

{
    id: 8,
    img: BRELOCK,
    price : false,
    title : 'BRP Audio-Premium System',
    favorite : true
} ,

{
    id: 9,
    img: COSTUME,
    price : 6800,
    title : 'Мужской костюм 3мм',
    favorite : false
} ,
{
    id: 10,
    img: POPPULAR3,
    price : 68800,
    title : 'BRP Audio-Premium System',
    favorite : false
} ,
{
    id: 11,
    img: BRELOCK,
    price : 68800,
    title : 'BRP Audio-Premium System',
    favorite : false
} , ],
 currentPage : 1,
 currentItem : 0,
 perPage : 9 ,
 currentFavorite : 0,
 
}

export const PaginationSlice = createSlice ({
    name : 'Pagination',
    initialState,
    reducers: {
        SetcurrentPage(state, action){
            state.currentPage = action.payload
        },
        SetcurrentId(state, action){
            state.currentid = action.payload
        },
        SetcurrentItem(state, action){
            state.currentItem = action.payload
            
        },
        Setfavorite(state, action){
            let popularfill = state.popular.find(item => item.id == action.payload)
        if(popularfill.favorite){
            popularfill.favorite = false
            state.popular.find(item => item.id == popularfill)
        } else{
            popularfill.favorite = true
            state.popular.find(item => item.id == popularfill)
        }
        },
        SetcurrentFavoriteSort(state, action){
            
            state.currentFavorite = action.payload
            
        }
       

    },
})



export const {SetcurrentPage, SetcurrentItem, Setfavorite, SetcurrentFavoriteSort, SetcurrentId} = PaginationSlice.actions

export default PaginationSlice.reducer
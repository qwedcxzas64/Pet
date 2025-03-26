import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import GetCartFromLS from '../../utils/getCartlocalStorege';
import axios from 'axios';






export type Gidro = {
    id: string, imageUrl : string, title : string, power: number,
    speed: number,
    price: number,
    favorite: number,
    stoke: number
}
enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
  }
  

interface GidroSliceState {
    items : Gidro[],
    status : Status,
    itemsforsort : Gidro[],
    
    
}

const dataitems = GetCartFromLS()

const initialState :  GidroSliceState ={
    items :  dataitems?.items || [],
    itemsforsort : dataitems?.items || [],
    
    status : Status.LOADING,
}
type FetchGidroArgs = {
    order : string,
    GetSearchvalue : string,
    FavoriteSortCurrent : string,
    FilterSlice : any,
    TypeSort : any,
    PaginationCurrent : string, // Это параметры буду исполозвать позже для пагинации и фильтров
  }
  

    


export const fetchGidro = createAsyncThunk <Gidro[], Record<string, any>>(
    'Gidro/fetchGidro',
    async (params)=>{
        const {
            order,
            GetSearchvalue,
                  FilterSlice,
                  TypeSort,
                  FavoriteSortCurrent,
                  PaginationCurrent,
                  PerPage
                  
          } = params // Это параметры буду исполозвать позже для пагинации и фильтров
          
          const {data} = await 
          
  axios.get<Gidro[]>(`https://65aebe7a1dfbae409a757a67.mockapi.io/pizzas?page=${PaginationCurrent}&limit=${PerPage}`)
          
          return data 
          
    },
)


export const GidroSlice = createSlice({
    name : 'Gidro',
    initialState,
    reducers:{
        SetGidro (state, action: PayloadAction<Gidro[]>){
            state.itemsforsort = action.payload
            state.items = action.payload
            
        },
         Setfavorite(state, action){
                    let popularfill = state.items.find(item => item.id == action.payload)
                    let popularfill2 = state.itemsforsort.find(item => item.id == action.payload)
                if(popularfill.favorite === 1){
                    popularfill.favorite = 0
                    popularfill2.favorite = 0
                    state.items.find(item => item.id == popularfill.id ? item.favorite ==  popularfill.favorite : '') 
                    state.itemsforsort.find(item => item.id == popularfill2.id ? item.favorite ==  popularfill2.favorite : '') 
                    
                } else{
                    popularfill.favorite = 1
                    popularfill2.favorite = 1
                    state.items.find(item => item.id == popularfill.id ? item.favorite ==  popularfill.favorite : '') 
                    state.itemsforsort.find(item => item.id == popularfill2.id ? item.favorite ==  popularfill2.favorite : '') 
                    //Второй массив с данными нужен для того что бы сохранять промежуточное состояние стэйта
                }
                },
                SetFavoritebysort(state, action){
                    
                    if(action.payload == 1)
                        {
                            
                            const arrr =  state.items.filter((item)=>item.favorite == action.payload)
                            state.items = arrr
                            
                            
                        } else{
                            const FULLARRAY =  state.itemsforsort.map((item , index)=> item)
                            state.itemsforsort = FULLARRAY
                            state.items = FULLARRAY
                        }   
                },
                SetDeleteItem(state, action){
                  const DELETEITEM = state.items.filter((item, i)  => item.id !== action.payload)
                  state.items = DELETEITEM
                },
                SetADDitem(state, action){
                     const {id, stoke, imageUrl, title} = action.payload
                  const ADDITEM = action.payload   
               const asda =   state.items.concat (ADDITEM)
               state.itemsforsort = asda
               state.items = asda
                  
               console.log(state.items)
                }
               
    },
    extraReducers: (builder) => {
        builder
           .addCase(fetchGidro.pending, (state) => {
              state.status = Status.LOADING
              state.items = []   
              state.itemsforsort = []
              
               
           })
           .addCase(fetchGidro.fulfilled, (state, action: PayloadAction<Gidro[]>) => {
              state.items = action.payload
              state.itemsforsort  = action.payload
              
              state.status = Status.SUCCESS
           })
           .addCase(fetchGidro.rejected, (state) => {
              state.status = Status.ERROR
              state.items = []
              state.itemsforsort = []
           })
     }
})



export const {SetGidro, Setfavorite, SetFavoritebysort, SetDeleteItem, SetADDitem} = GidroSlice.actions

export default GidroSlice.reducer




import React from "react";
import ReactPaginate from "react-paginate";
import { useSelector} from "react-redux";
import { useAppDispatch} from "../../Redux/Store";
import { SetcurrentPage } from "../../Redux/slices/PaginationSlice";
const styles = require('../../styles/main.module.scss');



const Paginations = () =>{
  const dispatch = useAppDispatch()
    const PaginationCurrent = useSelector((state:any)=> state.PaginationSlice.currentPage)
    
    const OnClickPagination = (selected:number) =>{
        dispatch(SetcurrentPage(selected))
        console.log(selected)
        
    }
  
    return (
        <div className={styles.Paginations__wrapper}>
            <ReactPaginate 
            nextLabel = ""
            previousLabel=''
            pageCount={2}
            forcePage={PaginationCurrent -1}
            onPageChange={event => OnClickPagination(event.selected + 1)}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
/>
            
        </div>
    )
}



export default Paginations
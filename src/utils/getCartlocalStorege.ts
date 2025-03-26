

const GetCartFromLS = () =>{
    const data = window.localStorage.getItem('state')
    const items = data ? JSON.parse(data) : []
    
    if (items.length){
        
        return {
            items : items ,
        }
        
    }
    
 }


export default GetCartFromLS
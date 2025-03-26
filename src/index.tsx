import {createRoot} from 'react-dom/client'
import App from './components/App'
import { createBrowserRouter, BrowserRouter } from 'react-router'
import { store } from './Redux/Store'
import { Provider } from 'react-redux'

const root = document.getElementById('root')

if(!root){
    throw new Error('root not found')
}
const container =  createRoot(root)

container.render(<BrowserRouter>
<Provider store={store}>
<App />
</Provider>
    
    </BrowserRouter>
    )



// const router = createBrowserRouter([
//     {
//         path : '/',
//         element : <App/>,
//         children : [
//             {
//                 path: '/about',
//                 element : <div>about2</div>
//             }
//         ]
//     }
// ])



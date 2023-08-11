import changeTheCart,{changeTotal,productsInStock,changeQtyCount} from './addRemove'
import { combineReducers } from 'redux'

const rootReducer=combineReducers({
    changeTheCart,
    changeTotal,
    productsInStock,
    changeQtyCount
});
export default rootReducer;
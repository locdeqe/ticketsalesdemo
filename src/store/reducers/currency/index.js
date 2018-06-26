const initialState = {
    currency: 'rub'
};
  
export default function currency(state = initialState, action) {
    switch (action.type){
        case "CHANGE_CURENCY": {
            return {...state, currency: action.payload}
        }
        default: {
            return state;
        }
    }
}
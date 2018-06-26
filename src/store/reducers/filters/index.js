const initialState = {
    filters: []
};
  
export default function filters(state = initialState, action) {
    switch (action.type){
        case "CHANGE_FILTER": {
            let filters = state.filters.slice();
            if (action.isOnly) {
                filters = [action.payload]
            } else {
                const index = filters.indexOf(action.payload);
                if (index === -1) {
                    filters = [...filters, action.payload];
                } else {
                    filters = [...filters.slice(0, index),
                                ...filters.slice(index+1)]
                }
            }
            return {...state, filters: filters}
        }
        default: {
            return state;
        }
    }
}
const initialState = {
    tickets: []
};

export default function tickets(state = initialState, action) {
    switch (action.type){
        case "FETCH_TICKETS": {
            return {...state, tickets: action.payload}
        }
        default: {
            return state;
        }
    }
}
const initialState = {
    engineerData: [],
    isPending: false,
    isRejected: false,
    isFulfilled: false,


    hire_status: ''
};

const engineerReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_ENGINEER_PENDING":
            return {
                ...prevState,
                isPending: true,
                isRejected: false,
                isFulfilled: false            
            };
        case "GET_ALL_ENGINEER_REJECTED":
            return {
                ...prevState,
                isPending: false,
                isRejected: true
            };
        case "GET_ALL_ENGINEER_FULFILLED":
            return {
                ...prevState,
                isPending: false,
                isFulfilled: true,
                engineerData: action.payload.data
                //trye change data with response
            };

        case "PUT_ENGINEER_FULFILLED":
            console.log('222', action.payload.data);
            return {
                ...prevState,
                isPending: false,
                isFulfilled: true,

                    
            }
            
            
            
        default:
            return prevState;
    }
}

export default engineerReducer;
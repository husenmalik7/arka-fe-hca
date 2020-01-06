const initialState = {
    companyData: [],
    isPending: false,
    isRejected: false,
    isFulfilled: false,
};

const companyReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "GET_COMPANY_BY_ID_PENDING":
            return {
                ...prevState,
                isPending: true,
                isRejected: false,
                isFulfilled: false            
            };
        case "GET_COMPANY_BY_ID_REJECTED":
            return {
                ...prevState,
                isPending: false,
                isRejected: true
            };
        case "GET_COMPANY_BY_ID_FULFILLED":
            return {
                ...prevState,
                isPending: false,
                isFulfilled: true,
                companyData: action.payload.data
                //trye change data with response
            };

            
            
            
        default:
            return prevState;
    }
}

export default companyReducer;
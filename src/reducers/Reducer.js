const reducer = (state={},action) =>{

    switch (action.type) {
        case "LOGIN":
                return{
                    test: action.payload
                }
        case "SIGNUP":
                return{
                    response: action.payload,
                }
        case "CHANGE_PASSWORD" :
                return{
                    Postresponse: action.payload
                }
       
        default:
            return state;
    }
}

export default reducer;
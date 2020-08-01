import axios from "axios";
import api from "../url/api";
export const anothername = (data) =>{
    return (dispatch)=>{
        axios.post(api+'/login',data)
            .then(response => {
                if(response.data.error)
                {
                    dispatch({type:"LOGIN",payload:response.data})
                }
                else{
                    dispatch({type:"LOGIN",payload:response.data})
                }
               
            })
            .catch(error => {
                if (error.response) {
                    dispatch({type:"LOGIN",payload:error.response.data.message})
                }
                else {
                    dispatch({type:"LOGIN",payload:error.message})
                }
            })

    }
}
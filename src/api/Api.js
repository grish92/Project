import axios from "axios"

const instance = axios.create({
    baseURL: `https://reqres.in/api/`
})


export const usersApi={
    getUsers(currentPage){
        return instance
           .get(`users?page=${currentPage}`)
           .then(response=> response.data)
     },
     getUser(userId){
        return instance.get(`users/${userId}`)
        .then(response=>response.data)
    }

}
// export const getUsers=(currentPage)=>{
//    return instance
//       .get(`users?page=${currentPage}`)
//       .then(response=> response.data)
// }

// export const getUser=(userId)=>{
//     return instance.get(`users/${userId}`)
//     .then(response=>response.data)
// }
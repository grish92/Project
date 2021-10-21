import axios from "axios"

const instance = axios.create({
    baseURL: `https://reqres.in/api/`
})

const instanceJson= axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/"
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

};



export const getPost=(userId)=>{
    return instanceJson.get(`posts?userId=${userId}`)
    .then(response=>response.data);
    
}
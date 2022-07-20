import Request from "../models/request.models.js"

export default class UserRequest extends Request {

    // this.token ou this.url ou this.header   

    static async login(loginData) {
        return await fetch(`${this.url}/userLogin`, {
            method: 'POST',
            headers: this.header,
            body: JSON.stringify(loginData)
        })
            .then((res) => res.json())
            .then((res) => {
                localStorage.setItem('@habits-kenzie:user', JSON.stringify(res.response))
                localStorage.setItem('@habits-kenzie:token', JSON.stringify(res.token))
                return res
            })
            .catch((err) => console.log(err))
    }

    static async updateProfile(newImage){
        return await fetch(`${this.url}/user/profile`, {
            method: 'PATCH',
            headers: this.header,
            body: JSON.stringify(newImage)
        })
        .then(res => res.json())
        .then(res => {
            
            const objUsuario = {
                usr_email:res.usr_email,
                usr_image:res.usr_image,
                usr_name:res.usr_name,
              }

              localStorage.setItem('@habits-kenzie:user', JSON.stringify(objUsuario))

        })
        .catch(err => console.log(err))
    }
}
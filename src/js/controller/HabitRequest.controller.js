import Request from "../models/request.models.js"

export default class HabitRequest extends Request {

    static async createHabit(newHabit) {
        return await fetch(`${this.url}/habits`, {
            method: 'POST',
            headers: this.header,
            body: JSON.stringify(newHabit)
        })
            .then(res => res.json())
            .then(res => {console.log(res)
                return res})
            .catch(err => console.log(err))
    }
    
    static async readAll() {
        return await fetch(`${this.url}/habits`, {
            method: 'GET',
            headers: this.header
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }
    
    static async readByCategory(category) {
        return await fetch(`${this.url}/habits/category/${category}`, {
            method: 'GET',
            headers: this.header
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }
    
    static async updateHabit(update, id) {
        return await fetch(`${this.url}/habits/${id}`, {
            method: 'PATCH',
            headers: this.header,
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }
    
    static async completeHabit(id) {
        return await fetch(`${this.url}/habits/complete/${id}`, {
            method: 'PATCH',
            headers: this.header
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }
    
    static async deleteHabit(id) {
        return await fetch(`${this.url}/habits/${id}`, {
            method: 'DELETE',
            headers: this.header
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }
}
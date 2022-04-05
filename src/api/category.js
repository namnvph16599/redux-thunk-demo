import { getLocalStorage } from "../utils/localStorage";
import instance from "./instance";

const { token, user } = getLocalStorage();
export const catePost = (cate) => {
    const url = `category/${user.id}`;
    return instance.post(url, cate, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}

export const cateList = () => {
    const url = "category";
    return instance.get(url)
}


export const cateListById = (id) => {
    const url = `category/${id}`;
    return instance.get(url)
}


export const cateRemove = (id) => {
    const url = `category/${id}`;
    return instance.delete(url)
}

export const catePut = (data) => {
    const url = `category/${data._id}`;
    return instance.put(url, data)
}




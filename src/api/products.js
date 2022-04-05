import { getLocalStorage } from "../utils/localStorage";
import instance from "./instance";


export const list = () => {
    const url = "/products";
    return instance.get(url)
}

export const read = (id) => {
    const url = `/products/${id}`;
    return instance.get(url)
}

export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url)
}

export const put = (products) => {
    const url = `/products/${products._id}`;
    return instance.put(url, products)
}

const { token, user } = getLocalStorage();
export const post = (data) => {
    const url = `products/${user.id}`;
    return instance.post(url, data, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}


export const getProdutcsSearch = (data) => {
    const url = `search/${data}`;
    return instance.get(url);
}

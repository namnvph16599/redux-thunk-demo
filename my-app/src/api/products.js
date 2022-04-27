import instance from "./instance";
export const getall =  () => {
    const url = '/products';
    return instance.get(url)
}
export const getById =  (id) => {
    const url = `/products/${id}`;
    return instance.get(url)
}
export const remove =  (id) => {
    const url = `/products/${id}`;
    return instance.delete(url)
}
export const post = (data) => {
    const url = 'products';
    return instance.post(url,data)
}

export const put = (data) => {
    const url = `products/${data.id}`;
    return instance.put(url,data)
}
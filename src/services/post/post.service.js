import axios from "axios";
const api = process.env.URL_API;

const getPost = async () => {
    return await axios.get(`/api/product/list`)
}

export  {
    getPost
}
import http from "../http-common";
import IPost from "../types/IPost";

const getAll = () => {
    return http.get<IPost[]>('/posts');
}

const get = (id: number) => {
    return http.get<IPost>('/posts/' + id);
}

const create = (formValues: any) => {
    return http.post<IPost>('/posts', formValues);
}

const PostService = {
    getAll,
    get,
    create
}

export default PostService;
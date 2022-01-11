import http from "../http-common";
import IPost from "../types/IPost";

const getAll = () => {
    return http.get<IPost[]>('/posts');
}

const get = (id: number) => {
    return http.get<IPost>('/posts/' + id);
}

const PostService = {
    getAll,
    get
}

export default PostService;
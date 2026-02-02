import { login, logout } from "./authService";
import { setLike, setDislike } from "./likes";
import { createPost, getAllPosts } from "./post";
import {
    checkEmailAvailability,
    createUser,
    sendEmail,
    verifySessionToken,
} from "./register";

export {
    login,
    logout,
    setLike,
    setDislike,
    createPost,
    getAllPosts,
    createUser,
    verifySessionToken,
    sendEmail,
    checkEmailAvailability,
};

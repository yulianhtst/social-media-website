import { connectDb } from "@/src/server/dbConfig/dbConfig";
import User from "@/src/server/models/User";

import bcryptjs from "bcryptjs";

export const findUserById = async (id: string | string[] | undefined) => {
    connectDb();
    const data = await User.findById(id);
    const user = JSON.parse(JSON.stringify(data));
    return user;
};

export const createUser = async (formData: any) => {
    connectDb();
    const hashedPassword = await bcryptjs.hash(formData.password, 10);

    const userData = {
        name: formData.name,
        email: formData.email,
        password: hashedPassword,
    };

    // const activity =
    return await new User({
        ...userData,
        activity: {
            posts: [],
            comments: [],
            comments_likes: [],
            posts_likes: [],
        },
    }).save();
};

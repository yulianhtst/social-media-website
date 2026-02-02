import { connectDb } from "@/src/server/dbConfig/dbConfig";
import User from "@/src/server/models/User";
import bcrypt from "bcryptjs";

export const login = async (email: string, password: string) => {
    connectDb();
    const user = await User.findOne({ email });

    const hashedPassowrd = user.password;
    const isMatched = await bcrypt.compare(password, hashedPassowrd);

    if (!isMatched) {
        throw { error: "Wrong credentials" };
    } else if (!user) {
        throw { error: "Can't find user" };
    } else {
        return user;
    }
};

// export const logout = (token: string) => {
// };

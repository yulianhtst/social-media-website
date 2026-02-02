import { connectDb } from "@/src/server/dbConfig/dbConfig";

export const createComment = async () => {
    connectDb();
    return;
};

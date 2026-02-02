import { connectDb } from "@/src/server/dbConfig/dbConfig";
import { findUserByIdSS } from "@/src/server/lib/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    connectDb();
    const { id: userId } = req.query;
    console.log(userId, "idddddddddddddddddddddddddddd");

    const user = await findUserByIdSS(userId);

    const userDTO = {
        name: user?.name,
        email: user?.email,
    };

    if (user) {
        res.json(userDTO);
    } else {
        res.status(404).end();
    }
}

import { setLikeSS } from "@/src/server/lib/likes";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const userId = req.body.userId;
    const postId = req.query.id || "";

    const like = await setLikeSS(postId, userId);
    console.log(like);

    res.json(like);
}

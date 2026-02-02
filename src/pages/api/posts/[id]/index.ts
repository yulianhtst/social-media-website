import { getPostByID } from "@/src/server/lib/post";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const postID = req.query.id;
    console.log(postID);

    const post = await getPostByID(postID);

    res.json(post);
}

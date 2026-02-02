import { connectDb } from "@/src/server/dbConfig/dbConfig";
import PostLikes from "@/src/server/models/Likes/PostLikes";
import Post from "@/src/server/models/Post";
import User from "@/src/server/models/User";

export const setLike = async (postId: string, userId: string) => {
    connectDb();
    const like = await new PostLikes({
        user_id: userId,
        post_id: postId,
    }).save();
    // const likeId = like._id.toString() || "";

    const user = await User.findByIdAndUpdate(userId, {
        $push: { "activity.post_likes": like._id },
    });
    // user.activity.posts_likes.push(like._id);
    // await user.save();

    await Post.findByIdAndUpdate(postId, { $push: { likes: like } });

    return {
        user: userId,
        post: postId,
    };
};

export const setDislike = async (postId: string, userId: string) => {
    connectDb();
    const dislike = await PostLikes.findOneAndDelete({ user_id: userId });

    await User.findByIdAndUpdate(userId, {
        $pull: { "activity.posts_likes": dislike._id },
    });
    await Post.findByIdAndUpdate(postId, {
        $pull: { likes: dislike._id },
    });

    return {
        user: userId,
        post: postId,
    };
};

export const getAllLieksSS = async (postId: string) => {
    connectDb();
    const allLikes = await PostLikes.find({ post_id: postId });
    return allLikes;
};

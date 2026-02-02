import Layout from "@/components/layout/MainLayout";
import ExplorePage from "@/components/pages/ExplorePage/ExplorePage";

import { getAllPosts } from "@/src/server/lib/post";
import { GetServerSidePropsContext } from "next";
import { ReactNode } from "react";

type ExploreProps = {
    title: string;
    posts: Object;
};

export default function Explore(props: ExploreProps) {
    const { title } = props;
    return (
        <Layout>
            <ExplorePage />
        </Layout>
    );
}

export const getServerSideProps = async (
    context: GetServerSidePropsContext,
) => {
    const posts = await getAllPosts();
    // const hed = context.res.getHeader('auth')
    // console.log(context.req.headers);
    // console.log(context.req.url);
    return {
        props: {
            title: "Posts",
            posts,
        },
    };
};

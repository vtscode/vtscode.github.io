import { NotionRenderer } from "react-notion";
import Container from "../../components/Container";
import { Text, Button, Box, Link } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { getAllPosts } from "../api/notion";

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getAllPosts();

  // Find the current blogpost by slug
  const post = posts.find((t) => t.slug === slug);

  const blocks = await fetch(
    `https://notion-api.splitbee.io/v1/page/${post.id}`
  ).then((res) => res.json());

  return {
    props: {
      blocks,
      post,
    },
    revalidate: 1,
  };
}

export default ({ post, blocks }) => {
  if (!post)
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          site_name: "vtscode.github.io",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Container>
        <Box maxWidth="768">
          <Text>
            <NotionRenderer blockMap={blocks} />
          </Text>

          <Button background={"none"} _hover={{ background: "none" }}>
            <Link href="/blog">
              <ArrowLeftIcon />
            </Link>
          </Button>
        </Box>
      </Container>
    </>
  );
};

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((row) => `/blog/${row.slug}`),
    fallback: true,
  };
}

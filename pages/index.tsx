import Container from "../components/Container";
import { Heading, Box, Flex, Link, SimpleGrid } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import useSWR from 'swr'
import fetcher from '../scripts/fetcher'
import { motion } from "framer-motion";
import Stack from "../components/MyStack";
import Paragraph from "../components/Paragraph";
import Script from "next/script";
import ProjectCard from "../components/ProjectCard";
import { useEffect, useState } from "react";

const url = "https://vtscode.github.io/";
const title = " Home | Riventus";
const description =
  "Self-taught web developer, Javascript enthusiast, passionate about building things with code and with a great knowledge of techniques aimed at a great user experience.";

export default function Home() {
  const [reposData, setreposData] = useState([])
  const { data, error } = useSWR('/api/github', fetcher)

  useEffect(() => {
    if(data){
      setreposData(data.repos)
    }
  },[data])


  return (
    <>
      <Script async src="https://cdn.splitbee.io/sb.js" />

      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: "/images/vintagepc.png",
              width: 800,
              height: 420,
              alt: title,
            },
          ],
        }}
      />
      <Container>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Flex justifyContent="space-around">
            <Flex flexDir="column" p=" 0 20px 0 0" marginBottom="50px">
              <Heading as="h1" p="0 0 30px 0">
                Hi there, I&#39;m Riventus.
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                I&#39;m a Software Developer. I&#39;m
                curruntely working as a FrontEnd Developer and learning Typescript and Next.js in my
                free time.
              </Paragraph>
            </Flex>
            {/*<Image
              width="180px"
              height="120px"
              borderRadius="50%"
              
              src={`https://github.com/rosaerick.png`}
            />*/}
          </Flex>
          <Box as="div" m="30px 0"></Box>

          <Stack />
          <Box as="section" mt={10} mb={20}>
            <Heading
              letterSpacing="tight"
              mt={8}
              size="lg"
              fontWeight={700}
              as="h2"
              mb={4}
            >
              Featured Projects 👨‍💻
            </Heading>
            <SimpleGrid minChildWidth="300px" spacing="40px">
              {reposData.map((dataRepos,idxrepos) => (
                <ProjectCard
                  key={idxrepos}
                  title={dataRepos.name}
                  description={dataRepos.description}
                  repoHref={dataRepos.url}
                  demoHref={dataRepos.homepage || 'https://vtscode.github.io'}
                  languageColor="#2b7489"
                  language={dataRepos.language}
                  starCount={dataRepos.stars} stargazersUrl={""}
                />
              ))}
            </SimpleGrid>
          </Box>
        </motion.div>
      </Container>
    </>
  );
}

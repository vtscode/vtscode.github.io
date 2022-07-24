import useSWR from 'swr'
import {
    Flex,
    Heading,
    Text,
    Box
} from '@chakra-ui/react'
import Container from '../components/Container'
import { motion } from "framer-motion"
import ProjectList from '../components/ProjectList' 
import React from 'react'
import { NextSeo } from 'next-seo'


export default function Projects() {
    const { data, error } = useSWR('/api/github')
    if (error) return <Container><Text>Failed to load projects!</Text></Container>
    if (!data) return <Container><Text>Loading...</Text></Container>
    return (
        <Container>
                <NextSeo
        title="Projects | Riventus"
        description="All my projects stored in GitHub, created using GitHub API"
      />

             <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .7, delay: .4 }}
                    >
            <Heading as="h1" lineHeight='20px'>Projects </Heading>
                <Box height="5px" w="135px" m="15px 0" bottom="-1px" display="block" backgroundImage="radial-gradient( circle farthest-corner at 10% 20%, rgba(255, 94, 247, 1) 17.8%, rgba(2, 245, 255, 1) 100.2% );
}"  ></Box>
            
            <Flex flexDir="column" m="30px 0">
            <ProjectList />
            </Flex>
</motion.div>
          
        </Container>
    )
}
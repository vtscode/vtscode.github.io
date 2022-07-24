import { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Divider,
  Button,
  Collapse,
  LightMode
} from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import Container from "../components/Container";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

const About = () => {
  const [show, setShow] = useState(false);
 const handleToggle = () => setShow(!show);
  
  return (
    <>
           <NextSeo
        title="About me | Riventus"
        description="Self-taught web developer, Javascript enthusiast, passionate about building things with code and with a great knowledge of techniques aimed at a great user experience."
        canonical="https://vtscode.github.io"
        openGraph={{}}
      />
      <Container>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Box>
            <Flex justifyContent="space-between" alignItems="flex-end">
              <Image
                borderRadius="full"
                boxSize="150px"
                src={`https://github.com/rosaerick.png`}
              />
            </Flex>
            <Heading p="20px 0">Hi, There!</Heading>

            <Collapse in={show} startingHeight={100}>
              <Paragraph fontSize="xl" lineHeight={1.6}>
              I'm Self-shown Web Developer, zeroed in on Frontend, energetic about
               building things with code and with an incredible information on strategies focused on a
                incredible client experience. Since being acquainted with coding I
                have begun understanding articles, paying attention to digital recordings, taking web-based courses and making an arrangement of undertakings to report my excursion.
              </Paragraph>
            </Collapse>
            <LightMode>
              <Button
                size="sm"
                onClick={handleToggle}
                mt="1rem"
                variant="ghost"
                _hover="color = grey.400"
              >
                Show {show ? "Less" : "More"}
              </Button>
            </LightMode>
          </Box>
          <Divider my={10} />
        </motion.div>
      </Container>
    </>
  );
};

export default About;

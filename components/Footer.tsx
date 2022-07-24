import {
  Box,
  Stack,
  Text,
  Flex,
  ButtonGroup,
  IconButton,
  Link,
  Divider,
} from "@chakra-ui/react";

import NextLink from "next/link";

import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    m=" 0 auto"
    width={"100%"}
    maxW="7xl"
    px={{ base: "4", md: "8" }}
  >
    <Stack
      direction="row"
      spacing="6"
      align="center"
      alignSelf={"center"}
      justify="center"
      pb={5}
      textAlign="center"
    >
      <ButtonGroup variant="default">
        <IconButton
          as="a"
          href="mailto:ventuscode@gmail.com"
          aria-label="Email: ventuscode@gmail.com"
          icon={<FaEnvelope fontSize="20px" />}
        />
        <IconButton
          as="a"
          variant={"default"}
          href="https://www.instagram.com/rhivent/"
          aria-label="instagram"
          icon={<FaInstagram fontSize="20px" />}
        />
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/riventus.aritonang/"
          aria-label="Linkedin"
          icon={<FaLinkedin fontSize="20px" />}
        />
        <IconButton
          as="a"
          href="https://github.com/vtscode"
          aria-label="Github"
          icon={<FaGithub fontSize="20px" />}
        />
      </ButtonGroup>
    </Stack>
    <Flex
      justifyContent={"center"}
      fontWeight="bold"
      fontSize={9}
      fontFamily={"monospace"}
      gap="10px"
    >
      <NextLink href="/snippets">Snippets</NextLink>
      <NextLink href="/resume">Resume</NextLink>
    </Flex>
    <Divider pt={2} />
    <Stack direction="row" align="center" justify="space-between" pt={5}>
      <Text fontSize="11px" fontWeight={"medium"}>
        &copy; VTSCODE {new Date().getFullYear()}
      </Text>
      <IconButton
        as={Link}
        rounded="md"
        background={"none"}
        _hover={{ background: "none" }}
        aria-label="Github Repo"
        rel="noopener"
        href="https://github.com/vtscode/vtscode.github.io"
        isExternal
        icon={<FaGithub fontSize="18px" />}
      />
    </Stack>
  </Box>
);

export default Footer;

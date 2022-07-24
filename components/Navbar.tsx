import {
    useColorMode,
    Button,
    Image,
    Flex,
    Box
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import DarkModeSwitch from './DarkModeSwitch';
import MenuHamburguer from './Menu'

const Navbar = () => {
    // const { colorMode } = useColorMode()
    // const router = useRouter()

    // const navHoverBg = {
    //     light: 'pink.400',
    //     dark: 'pink.500',
    // }

    return (<>
        <MenuHamburguer />
        <Flex
            display={['none', 'none', 'flex', 'flex']}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            maxWidth="51.25rem"
            minWidth="22.25rem"
            width="100%"
            as="nav"
            px={6}
            my={8}
            mx="auto"
        >
            
        <Image
            src="https://avatars.githubusercontent.com/u/56695534?v=4"
            style={{
                cursor: 'pointer',
                fontSize: '1.875rem',
                height: "50px",
                width: "50px",
            }}
        /> 
            
            <Box>
                    <NextLink href="/" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 3]}
                        fontSize="sm"
                        _hover={{ border: '.125rem solid',
                           }} 
                        aria-label="Home"
                        colorScheme='dark'
                    >
                        Home
                    </Button>
                </NextLink>
                {/* <NextLink href="/blog" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 3]}
                        _hover={{
                            border: '.0625rem solid',
                          
                        }}
                        aria-label="Blog"
                        fontSize="sm"
                        colorScheme='dark'
                    >
                        Blog
                    </Button>
                </NextLink> 
                <NextLink href="/projects" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 3]}
                        _hover={{border: '.0625rem solid',
                             }} 
                        aria-label="Projects"
                        fontSize="sm"
                         colorScheme='dark'
                    >
                        Projects
                    </Button>
                </NextLink>
            
                    <NextLink href="/snippets" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 3]}
                        _hover={{ border: '.0625rem solid',
                        }} 
                        aria-label="Snippets"
                        fontSize="sm"
                         colorScheme='dark'
                    >
                        Snippets
                    </Button>
                    
                </NextLink>
                <NextLink href="/About" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 3]}
                        _hover={{ border: '.0625rem solid',
                          }} 
                        aria-label="About"
                        fontSize="sm"
                         colorScheme='dark'
                    >
                        About
                    </Button>
                </NextLink>
                       <NextLink href="/resume">
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 3]}
                        _hover={{ border: '.0625rem solid',
                          }} 
                        aria-label="resume"
                        fontSize="sm"
                         colorScheme='dark'
                    >
                       Resume
                    </Button>
                    
                </NextLink>*/}
                <DarkModeSwitch  />
            </Box>
            
        </Flex>
        </>
    )
}

export default Navbar
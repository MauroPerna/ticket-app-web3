import { Key, ReactNode, useState } from 'react';
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    FormControl,
    Input,
    IconButton,
    Image
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, SearchIcon } from '@chakra-ui/icons';
import NextLink from "next/link";
import { useRouter } from 'next/router';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const Links = [
    ["/events", "Events"],
    ["/market-place", "Marketplace"],
    ["/my-inventory", "My NFTs"],
    ["/create", "Create"],
];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    const [active, setActive] = useState(router.pathname);
    const textColor = useColorModeValue("#293541", "white");

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack flexDir='row' w='40%' alignItems={'center'}>
                        <Box w='20%'><Image width='80px' src='https://cdn.logo.com/hotlink-ok/logo-social.png' alt="Logo"/></Box>
                        <form>
                            <FormControl display='flex'>
                                <Input type="text"></Input>
                                <Button type="submit"><SearchIcon /></Button>
                            </FormControl>
                        </form>
                    </Stack>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7} alignItems='center'>
                            {
                                Links.map((l: string[], index: Key) => (
                                    <NextLink href={l[0]} id={l[1]} key={index}>
                                        <Link
                                            id={l[1]}
                                            cursor={"pointer"}
                                            fontSize={"1em"}
                                            fontWeight={"3px"}
                                            // onClick={(e) => handleActive(e)}
                                            color={active === l[0] ? "#F3B46F" : textColor}
                                        >
                                            {l[1].split("-").join(" ")}
                                        </Link>
                                    </NextLink>
                                ))
                            }
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Box><ConnectButton /></Box>
                            {/* <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu> */}
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
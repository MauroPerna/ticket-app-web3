import { Stack } from "@chakra-ui/react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({
    children,
}: {
    children: JSX.Element | JSX.Element[];
}) {
    return (
        <Stack>
            <Nav />
            {children}
            <Footer />
        </Stack>
    )
}
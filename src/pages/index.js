import { Box, Container, Typography } from "@mui/material";
import TopNavBar from "../components/NavBar";
export default function Home() {
    return (
        <>
            <TopNavBar />
            <Container sx={{ bgcolor: "tomato", height: "100vh" }}>
                <Box sx={{ p: 1, width: { xs: 1, md: 200 } }}>
                    <Typography
                        variant="h2"
                        sx={{ p: 1, ":hover": { bgcolor: "pink" } }}
                    >
                        Hello world!
                    </Typography>
                </Box>
            </Container>
            {/* Add other sections here like <Services />, <About />, etc. */}
        </>
    );
}

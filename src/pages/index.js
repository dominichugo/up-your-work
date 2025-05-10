import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
} from "@mui/material";
import NavBar from "../components/NavBar";

export default function Home() {
    return (
        <>
            <NavBar />
            <Box
                sx={{
                    backgroundImage: `url(/images/pourhero.png)`,
                    height: "100vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        color: "white",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        marginY: 4,
                    }}
                >
                    It's All About YOU.
                </Typography>
            </Box>
            <Box sx={{ height: "90vh" }}>
                <Container sx={{ color: "primary.main", paddingY: 4 }}>
                    <Typography variant="h1">Meet YOUR Team</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 2,
                        }}
                    >
                        <Box>Karla</Box>
                        <Box>Zack</Box>
                    </Box>
                </Container>
            </Box>
            {/* Add other sections here like <Services />, <About />, etc. */}
        </>
    );
}

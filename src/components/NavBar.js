import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material";

export default function NavBar() {
    return (
        <>
            <AppBar
                position="sticky"
                sx={{ display: "flex", justifyContent: "center", height: 70 }}
            >
                <Container>
                    <Toolbar>
                        <Typography
                            variant="h2"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Up Your Work
                        </Typography>
                        <Button
                            sx={{
                                color: "inherit",
                                textTransform: "none",
                                marginX: 1,
                            }}
                        >
                            About
                        </Button>
                        <Button
                            sx={{
                                color: "inherit",
                                textTransform: "none",
                                marginX: 1,
                            }}
                        >
                            Portfolio
                        </Button>
                        <Button
                            sx={{
                                color: "inherit",
                                textTransform: "none",
                                marginX: 1,
                            }}
                        >
                            Packages
                        </Button>
                        <Button
                            sx={{
                                bgcolor: "custom.red",
                                textTransform: "none",
                                color: "inherit",
                                marginX: 1,
                            }}
                        >
                            Work Together
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
            {/* <Box
                sx={{
                    bgcolor: "primary.main",
                    width: "100vw",
                    position: "fixed",
                }}
            >
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingY: 2,
                    }}
                >
                    <Link
                        href="#"
                        variant="h2"
                        underline="none"
                        sx={{ color: "primary.contrastText" }}
                    >
                        Up Your Work
                    </Link>
                    <Box
                        sx={{
                            display: "flex",
                            gap: 4,
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Link
                            href="#"
                            underline="none"
                            variant="h3"
                            sx={{ color: "primary.contrastText" }}
                        >
                            About
                        </Link>
                        <Link
                            href="#"
                            underline="none"
                            variant="h3"
                            sx={{ color: "primary.contrastText" }}
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="#"
                            underline="none"
                            variant="h3"
                            sx={{ color: "primary.contrastText" }}
                        >
                            Packages
                        </Link>
                        <Button
                            sx={{
                                bgcolor: "custom.red",
                                textTransform: "none",
                            }}
                        >
                            Work Together
                        </Button>
                    </Box>
                </Container>
            </Box> */}
        </>
    );
}

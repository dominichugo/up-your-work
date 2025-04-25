import { Typography } from "@mui/material";
import { StyledNavBar } from "./TopNavBar.styles";

export default function TopNavBar() {
    return (
        <>
            <StyledNavBar>
                <Typography variant="h2" sx={{ p: 2 }}>
                    Up Your Work
                </Typography>
            </StyledNavBar>
        </>
    );
}

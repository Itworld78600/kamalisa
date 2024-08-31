import { useState } from "react";
import {
  Container,
  Hidden,
  useMediaQuery,
  List,
  ListItemText,
  Box,
  Drawer,
  ListItemButton,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { kamalisa, logo } from "./SmallComponents/Images";
import { StyledText } from "./SmallComponents/AppComponents";
import { ExampleButton } from "./SmallComponents/StyledWalletButton";

export default function Header() {
  return (
    <Box component="section" sx={{ backgroundColor: "#7866C9", py: 1.5 }}>
      <Container maxWidth="xxl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Box
              component="img"
              sx={{ maxWidth: { xs: "190px", sm: "100%" } }}
              src={logo}
              alt="logo"
            />
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Box
              component="img"
              sx={{ maxWidth: { xs: "400px", lg: "100%" } }}
              src={kamalisa}
              alt="kamalisa"
            />
          </Box>
          <Box>
            <ExampleButton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

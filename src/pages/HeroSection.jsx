import { Box, Button, Container, Grid, Typography } from "@mui/material";
import {
  heroSectionBg,
  logoIcon,
  tokenomics,
} from "../components/SmallComponents/Images";
import PresaleBox from "../components/PresaleBox";

function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        py: 6,
        background: `url('${heroSectionBg}')`,
        backgroundSize: { xs: "cover", md: "100% 100%" },
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="xxl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={2} textAlign={"center"}>
            <Box>
              <Box
                component="img"
                sx={{ maxWidth: "100%", mt: { xs: 0, md: 15 } }}
                src={logoIcon}
                alt="log-icon"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                backgroundColor: "rgba(58,79,102,50%)",
                px: 2,
                py: 4,
                maxWidth: "600px",
                mx: "auto",
                borderRadius: "5px",
                minHeight: "635px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  sx={{ maxWidth: "100%" }}
                  src={tokenomics}
                  alt="tokenomics"
                />
                <Typography
                  sx={{
                    color: "#FFDC11",
                    textTransform: "uppercase",
                    fontSize: { md: "18px", lg: "22px", xl: "28px" },
                    fontWeight: "semi-bold",
                    ml: 1,
                  }}
                >
                  Claim Now Live
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  textAlign: "center",
                  px: { xs: 1, sm: 5, md: 2, lg: 3 },
                  mt: 3,
                }}
              >
                You Can Now Claim Your TOKENOMICS. Plus, Stake Your Tokens To
                Earn Rewards! Add
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  textAlign: "center",
                  px: { xs: 3, sm: 6, md: 4, lg: 8 },
                  wordWrap: "break-word",
                }}
              >
                0xFE8526A77A2c3590E5973bA81308B90BEA21FBFF To Your Wallet To See
                Your TOKENOMICS
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "18px",
                  textAlign: "center",
                  fontWeight: "bold",
                  mt: 4,
                }}
              >
                Your purchased TOKEN = 0
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "18px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Your stakeable TOKEN = 0
              </Typography>
              <Box sx={{ textAlign: "center", mt: 5 }}>
                <Box>
                  <Button
                    sx={{
                      color: "#FFDC11",
                      backgroundColor: "#000",
                      borderRadius: "25px",
                      fontWeight: 700,
                      fontSize: { md: "16px", lg: "20px" },
                      textTransform: "capitalize",
                      width: { xs: "200px", lg: "300px" },
                      textAlign: "center",
                      "&:hover": {
                        backgroundColor: "#000",
                        color: "#fff",
                      },
                    }}
                  >
                    Connect Wallet
                  </Button>
                </Box>
                <Box>
                  <Button
                    sx={{
                      color: "#FFDC11",
                      backgroundColor: "#000",
                      borderRadius: "25px",
                      fontWeight: 700,
                      fontSize: { md: "16px", lg: "20px" },
                      textTransform: "capitalize",
                      width: { xs: "200px", lg: "300px" },
                      textAlign: "center",
                      mt: 3,
                      "&:hover": {
                        backgroundColor: "#000",
                        color: "#fff",
                      },
                    }}
                  >
                    Connect with ETH
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <PresaleBox />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;

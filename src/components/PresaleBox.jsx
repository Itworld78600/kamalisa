import React, { useState } from "react";
import { Box, Button, InputAdornment, Stack, Typography } from "@mui/material";
import TimerCountDown from "./SmallComponents/PresaleTimer";
import CircularProgressBar from "./SmallComponents/CircularProgressBar";
import { eth, usdc, usdt, card, kam } from "./SmallComponents/Images";
import { StyledInputTwo } from "./SmallComponents/AppComponents";

function PresaleBox() {
  const [tokenPerUSDT, setTokenPerUSDT] = useState(4);
  const [buyWith, setBuyWith] = useState("USDT");
  const [amount, setAmount] = useState("");
  const [recivedTokens, setreceivedTokens] = useState(0);

  const handleInputChange = (event) => {
    const input = event.target.value;
    const newValue = input?.replace(/[^0-9.]/g, "");
    setAmount(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgba(58,79,102,50%)",
        px: 2,
        pt: 4,
        pb: 6,
        maxWidth: "600px",
        mx: "auto",
        borderRadius: "5px",
      }}
    >
      <Typography
        sx={{
          color: "#FFDC11",
          fontSize: { md: "18px", lg: "22px", xl: "28px" },
          fontWeight: "semi-bold",
          textAlign: "center",
          mb: 2.5,
        }}
      >
        Buy $SPY
      </Typography>
      <TimerCountDown time={1726340400} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 2,
        }}
      >
        <CircularProgressBar percentage={45} />
      </Box>
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 600,
          color: "#000",
          textAlign: "center",
        }}
      >
        Your purchased $SPY= 0
      </Typography>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          my: 1,
          mb: 2.5,
        }}
      >
        <Box
          sx={{
            height: "2px",
            background: "#fff",
            flexGrow: 1,
          }}
        />
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
          gap={{ xs: 0.5, sm: 1, md: 0.8, xl: 1, lg: 1 }}
          mx={{ xs: 1, md: 0.5, lg: 1, xl: 1 }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "20px",
              textAlign: "center",
              fontWeight: "700",
              color: "#FFDC11",
              fontFamily: "Poppins",
            }}
          >
            1 $SPY = $
            {+tokenPerUSDT > 0
              ? parseFloat(1 / +tokenPerUSDT).toFixed(5)
              : "0.00"}
          </Typography>
        </Box>

        <Box
          sx={{
            height: "2px",
            flexGrow: 1,
            background: "#fff",
          }}
        />
      </Stack>
      <Stack
        my={1}
        sx={{
          mx: 0,
          borderRadius: "12px",
          flexDirection: "row",
          background: "transparent",
          boxShadow: "#EA1D24",
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            width: "100%",
            gap: 2,
            px: { xs: 0, lg: 2 },
          }}
        >
          {[
            {
              text: "ETH",
              img: eth,
            },
            {
              text: "USDC",
              img: usdc,
            },
            {
              text: "USDT",
              img: usdt,
            },
            {
              text: "CARD",
              img: card,
            },
          ].map(({ text, img }) => (
            <Stack
              onClick={() => setBuyWith(text)}
              key={text}
              sx={{
                cursor: "pointer",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                width: "50%",
                py: { xs: 1, sm: 1.6 },
                boxShadow: buyWith === text ? "#EA1D24" : "none",
                fontFamily: "Poppins",
                border: buyWith === text ? "2px solid #000" : "2px solid #000",
                borderRadius: "12px",
                background: buyWith === text ? "#1CA5F9" : "#5088B0",
              }}
            >
              <Box component={"img"} alt="" src={img} width="22px" />
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#ffff",
                  fontSize: { xs: "9px", sm: "11px" },
                  fontWeight: "700",
                  fontFamily: "Poppins",
                }}
              >
                {`${text}`}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          gap: { xs: 2, sm: 2 },
          px: { xs: 0, lg: 2 },
          mb: 3,
          mt: 2,
        }}
      >
        <Stack width="100%">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box component="span" sx={{ fontSize: "13px" }}>
              ETH You pay:
            </Box>
            <Box component="span" sx={{ fontSize: "13px" }}>
              Max
            </Box>
          </Box>
          <StyledInputTwo
            type="text"
            placeholder="0.00"
            value={amount}
            onChange={handleInputChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Box
                    component={"img"}
                    alt=""
                    src={
                      buyWith == "ETH"
                        ? eth
                        : buyWith == "USDC"
                        ? usdc
                        : buyWith == "USDT"
                        ? usdt
                        : card
                    }
                    sx={{
                      width: { xs: "20px", sm: "26px" },
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack width="100%">
          <Typography sx={{ textAlign: "right", fontSize: "13px" }}>
            $SPY you recieve
          </Typography>
          <StyledInputTwo
            type="text"
            placeholder="0"
            value={amount > 0 ? recivedTokens : "0"}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <Box
                    component={"img"}
                    alt=""
                    src={kam}
                    sx={{
                      width: { xs: "20px", sm: "26px" },
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 0, lg: 2 },
          gap: 2,
        }}
      >
        <Box width={{ width: "50%" }}>
          <Button
            sx={{
              color: "#FFDC11",
              backgroundColor: "#000",
              borderRadius: "25px",
              fontWeight: 700,
              fontSize: { md: "16px", lg: "20px" },
              textTransform: "capitalize",
              width: "100%",
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
        <Box width={{ width: "50%" }}>
          <Button
            sx={{
              color: "#FFDC11",
              backgroundColor: "#000",
              borderRadius: "25px",
              fontWeight: 700,
              fontSize: { md: "16px", lg: "20px" },
              textTransform: "uppcase",
              width: "100%",
              textAlign: "center",
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff",
              },
            }}
          >
            CLAIM
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default PresaleBox;

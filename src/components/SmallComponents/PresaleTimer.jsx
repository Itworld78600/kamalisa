import React, { useState, useEffect } from "react";
import moment from "moment";
import { Box, useMediaQuery } from "@mui/material";

export default function TimerCountDown({ time }) {
  const matches = useMediaQuery("(max-width:650px)");

  const [countTime, setCountDateTime] = useState({
    time_days: 0,
    time_Hours: 0,
    time_Minusts: 0,
    time_seconds: 0,
  });
  const startTime = async () => {
    let until = moment.unix(time).format("x");
    let interval = setInterval(() => {
      let now = moment().format("x");
      const distance = +until - +now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setCountDateTime({
          ...countTime,
          time_days: days,
          time_Hours: hours,
          time_Minusts: minuts,
          time_seconds: seconds,
        });
      }
    }, 1000);
  };
  useEffect(() => {
    startTime();
  }, [time]);
  return (
    <>
      <Box
        ml={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={{ xs: 1.5, sm: 4, md: 1, lg: 4 }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            borderRadius="12px"
            color="#0159F6"
            fontSize={{ xs: "14px", sm: "16px" }}
            textAlign="center"
            lineHeight={{ xs: "25px", sm: "30px" }}
            fontFamily="Roboto"
            sx={{
              border: "2px solid #93D7FE",
              px: 2,
              py: 0.5,
              backgroundImage:
                "linear-gradient(to bottom, #b7aaf2, #9ba6e6, #83a1d6, #729ac4, #6792b0)",
            }}
          >
            <Box
              sx={{
                fontSize: { xs: "22px", sm: "28px" },
                fontFamily: "Roboto",
                color: "#fff",
              }}
            >
              {countTime.time_days > 9 ? "" : 0}
              {countTime.time_days}
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: matches ? "12px" : "16px",
                fontWeight: "400",
                marginTop: "-20px",
                fontFamily: "Roboto",
                color: "#fff",
              }}
            >
              Days
            </Box>
          </Box>
        </Box>
        {/* <Box mx={2} mb={5} color="#000000" fontWeight="700" fontSize="30px">
          :
        </Box> */}

        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            borderRadius="12px"
            color="#0159F6"
            fontSize={{ xs: "14px", sm: "16px" }}
            fontWeight="400"
            textAlign="center"
            lineHeight={{ xs: "25px", sm: "30px" }}
            fontFamily="Roboto"
            sx={{
              border: "2px solid #93D7FE",
              px: 1.55,
              py: 0.5,
              backgroundImage:
                "linear-gradient(to bottom, #b7aaf2, #9ba6e6, #83a1d6, #729ac4, #6792b0)",
            }}
          >
            <Box
              sx={{
                fontSize: { xs: "22px", sm: "28px" },
                color: "#fff",
              }}
            >
              {countTime.time_Hours > 9 ? "" : 0}
              {countTime.time_Hours}
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: matches ? "12px" : "16px",
                fontWeight: "400",
                marginTop: "-20px",
                color: "#fff",
              }}
            >
              {matches ? "Hrs" : "Hours"}
            </Box>
          </Box>
        </Box>
        {/* <Box mx={2} mb={5} color="#000000" fontWeight="700" fontSize="30px">
          :
        </Box> */}
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            borderRadius="12px"
            color="#0159F6"
            fontSize={{ xs: "14px", sm: "16px" }}
            fontWeight="400"
            textAlign="center"
            lineHeight={{ xs: "25px", sm: "30px" }}
            fontFamily="Roboto"
            sx={{
              border: "2px solid #93D7FE",
              px: 2.25,
              py: 0.5,
              backgroundImage:
                "linear-gradient(to bottom, #b7aaf2, #9ba6e6, #83a1d6, #729ac4, #6792b0)",
            }}
          >
            <Box
              sx={{
                fontSize: { xs: "22px", sm: "28px" },
                color: "#fff",
              }}
            >
              {countTime.time_Minusts > 9 ? "" : 0}
              {countTime.time_Minusts}
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: matches ? "12px" : "16px",
                fontWeight: "400",
                marginTop: "-20px",
                color: "#fff",
              }}
            >
              {matches ? "Min" : "Min"}
            </Box>
          </Box>
        </Box>
        {/* <Box mx={2} mb={5} color="#000000" fontWeight="700" fontSize="30px">
          :
        </Box> */}
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            borderRadius="12px"
            color="#0159F6"
            fontSize={{ xs: "14px", sm: "16px" }}
            fontWeight="400"
            textAlign="center"
            lineHeight={{ xs: "25px", sm: "30px" }}
            fontFamily="Roboto"
            sx={{
              border: "2px solid #93D7FE",
              px: 2,
              py: 0.5,
              backgroundImage:
                "linear-gradient(to bottom, #b7aaf2, #9ba6e6, #83a1d6, #729ac4, #6792b0)",
            }}
          >
            <Box
              sx={{
                fontSize: { xs: "22px", sm: "28px" },
                color: "#fff",
              }}
            >
              {countTime.time_seconds > 9 ? "" : 0}
              {countTime.time_seconds}
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: matches ? "12px" : "16px",
                fontWeight: "400",
                color: "#fff",
              }}
            >
              {matches ? "Sec" : "Sec"}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

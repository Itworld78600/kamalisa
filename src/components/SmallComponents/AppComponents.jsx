/* eslint-disable react/prop-types */
import { Alert, Box, Snackbar, TextField } from "@mui/material";
import { Button } from "@mui/material";

export function ToastNotify({ alertState, setAlertState }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={alertState.open}
      autoHideDuration={10000}
      key={"top center"}
      onClose={() => setAlertState({ ...alertState, open: false })}
    >
      <Alert
        onClose={() => setAlertState({ ...alertState, open: false })}
        severity={alertState.severity}
      >
        {alertState.message}
      </Alert>
    </Snackbar>
  );
}

export function StyledButton({ children, ...props }) {
  return (
    <>
      <Button
        {...props}
        sx={{
          color: "#FFDC11",
          background: "#000000",
          fontSize: { xs: "15px", sm: "20px" },
          fontWeight: "semi-bold",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          textTransform: "uppercase",
          fontFamily: "Poppins",
          borderRadius: "22px",
          px: { xs: 2, md: 5, lg: 7 },
          py: { xs: 0.75, md: 1, lg: 1.5 },
          width: props.width,
          "&.Mui-disabled": {
            color: "#979EA7",
          },
          "&:hover": {
            background: "#000000",
            opacity: 0.8,
          },
        }}
      >
        {children}
      </Button>
    </>
  );
}

export function StyledText({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#000000",
          fontSize: "18px",
          //   fontFamily: "Josefin Sans",
          fontWeight: "500",
          mr: props.mr,
        }}
      >
        {children}
      </Box>
    </>
  );
}
export function StyledTitle({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#000000",
          fontSize: "40px",
          //   fontFamily: "Josefin Sans",
          fontWeight: "700",
          mr: props.mr,
        }}
      >
        {children}
      </Box>
    </>
  );
}

export const StyledInputTwo = ({ ...props }) => {
  return (
    <TextField
      {...props}
      sx={{
        background: "#5088b1",
        borderRadius: "8px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
          "& fieldset": {
            border: "none",
          },
          "&:hover fieldset": {
            border: "none",
          },
          "&.Mui-focused fieldset": {
            border: "none",
          },
        },

        input: {
          "&::placeholder": {
            color: "#000 !important",
            opacity: 1,
          },
          padding: {
            xs: "16px 16px",
            sm: "12px 12px",
          },
          color: "#000",
          fontSize: "16px",
          fontWeight: "400",
          fontFamily: "Meutas-Regular",
        },
      }}
    />
  );
};

import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image, { StaticImageData } from "next/image";
import internal from "stream";

interface CardObjProps {
  width?: string;
  title: string;
  amount: number;
  outlined?: boolean;
  buttonText1?: string;
  buttonText2?: string;
  handleModalOpen?: () => void;
  image?: StaticImageData;
  secondary?: boolean;
}

const gradientText = {
  alignSelf: "self-start",
  background:
    "linear-gradient(91.9deg, rgba(237, 252, 234, 0.7) 1.89%, rgba(112, 112, 112, 0.7) 99.49%)",
  backgroundClip: "text",
  textFillColor: "transparent",
};

const CardObj = ({
  width,
  title,
  amount,
  outlined,
  buttonText1,
  buttonText2,
  handleModalOpen,
  image,
  secondary,
}: CardObjProps) => {
  return (
    <Paper
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "secondary.500",
        width: { width },
        minWidth: "300px",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
        gap: "1rem",
        border: "1px solid ",
        borderColor: "secondary.300",
        borderRadius: "3rem",
      }}
    >
      <Typography
        sx={{
          color: "rgba(255, 255, 255, 0.3)",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: "bold",
          ...gradientText,
        }}
      >
        {amount}
      </Typography>
      <Box display="flex" justifyContent="space-between">
        {buttonText1 && (
          <Button
            onClick={handleModalOpen}
            variant={outlined ? "outlined" : "contained"}
            sx={{ textTransform: "none" }}
            color={secondary ? "secondary" : "primary"}
          >
            {buttonText1}
          </Button>
        )}
        {buttonText2 && (
          <Button
            variant="outlined"
            color="secondary"
            sx={{ textTransform: "none" }}
          >
            {buttonText2}
          </Button>
        )}
      </Box>
      {image && (
        <>
          <Image
            src={image}
            alt=""
            priority
            style={{
              position: "absolute",
              bottom: "-17%",
              right: "-5%",
              transform: "rotate(-45deg)",
              opacity: "0.9",
              zIndex: "2",
            }}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{
              position: "absolute",
              width: "50%",
              height: "50%",
              borderRadius: "50%",
              background: "#4adf2881",
              filter: "blur(100px)",
              bottom: "0%",
              right: "-30%",
            }}
          ></Box>
        </>
      )}
    </Paper>
  );
};

export default CardObj;

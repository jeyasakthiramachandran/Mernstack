import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

// Styled component for the image
const StyledImage = styled("img")({
  width: "100%",
  maxWidth: "400px",
  borderRadius: "8px",
  marginBottom: "20px",
});

const About = () => {
  return (
    <div>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        sx={{ backgroundColor: "#f5f5f5", padding: "20px", borderRadius: "8px", boxShadow: 3 }}
      >
        <StyledImage src="https://ecomme.pl/ecomme-logo11.png" alt="Ecommerce" />
        <Typography sx={{ fontFamily: "fantasy", color: "#333" }} variant="h2">
          Welcome to Our Ecommerce Application!
        </Typography>
        <Typography sx={{ fontFamily: "fantasy", color: "#555", textAlign: "center", marginY: "10px" }} variant="h4">
          Built with ❤️ using the MERN Stack
        </Typography>
        <Typography sx={{ fontFamily: "sans-serif", color: "#666", textAlign: "center", marginY: "10px" }} variant="body1">
          Discover a wide range of products tailored just for you. Enjoy a seamless shopping experience with easy navigation, secure payments, and quick delivery.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ marginTop: "20px", borderRadius: "20px" }}
          onClick={() => alert("Explore our products now!")}
        >
          Start Shopping
        </Button>
      </Box>
    </div>
  );
};

export default About;

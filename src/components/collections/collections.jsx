import { Box, Stack, Typography, Link, Button } from "@mui/material";
import React from "react";

function Collections() {
    return (
        <Box mt={"80px"}>
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <Typography
                    variant="h1"
                    sx={{
                        width: {
                            xs: "340px",
                            sm: "300px",
                            md: "400px",
                            lg: "600px",
                            xl: "600px",
                        },
                        fontSize: {
                            xs: "30px",
                            sm: "40px",
                            md: "50px",
                            lg: "60px",
                            xl: "60px",
                        },
                    }}
                >
                    Eng So'nggi Kitoblar
                </Typography>
                <Typography
                    variant="h5"
                    width={"500px"}
                    mr={"30px"}
                    sx={{
                        width: {
                            xs: "330px",
                            sm: "300px",
                            md: "400px",
                            lg: "500px",
                            xl: "500px",
                        },
                        fontSize: {
                            xs: "12px",
                            sm: "40px",
                            md: "50px",
                            lg: "60px",
                            xl: "60px",
                        },
                    }}
                >
                    Butun dunyo yozuvchilarining eng zo'r kitoblari sizning
                    dunyoqarashingizni kengaytirishga yordam beradi.
                </Typography>
            </Box>
            <Stack
                direction={"row"}
                mt={"60px"}
                justifyContent={"space-between"}
            >
                {/* To'ldiriladi.... */}
            </Stack>
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                width={"100%"}
            >
                <Link to={"/books"}>
                    <Button
                        variant="contained"
                        style={{
                            background: "#272935",
                            padding: "6px 50px",
                            marginBottom: "20px",
                            fontFamily: "Playfair Display, serif",
                            fontSize: "12px",
                            marginTop: "30px",
                        }}
                    >
                        Ko'proq
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}

export default Collections;

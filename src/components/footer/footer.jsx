import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function Footer({ bookFavourite }) {
    return (
        <Box
            mt={"80px"}
            sx={{
                padding: "80px 0",
            }}
        >
            <Stack
                sx={{
                    flexDirection: {
                        xs: "column",
                        sm: "row",
                        md: "row",
                        lg: "row",
                        xl: "row",
                    },
                }}
                justifyContent={"space-between"}
            >
                <Box width={"500px"}>
                    <Typography
                        variant="h4"
                        mb={"15px"}
                        sx={{
                            width: {
                                xs: "300px",
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
                        Mutolaani bizdan boshlang!
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            width: {
                                xs: "300px",
                                sm: "300px",
                                md: "400px",
                                lg: "600px",
                                xl: "600px",
                            },
                        }}
                    >
                        Endilikda siz kitoblarni hech qayerga chiqmasdan
                        o'qishingiz mumkin. Ma'lum muddat davomida kitoblarni
                        o'qib o'z bilimlaringizni rivojlantiring.
                    </Typography>
                </Box>
                <Box>
                    <ul style={{ lineHeight: "40px" }}>
                        <li>Biz haqimizda</li>
                        <li>Yetkazib berish </li>
                        <li>Filial va dilerlar</li>
                    </ul>
                </Box>
                <Box>
                    <ul style={{ lineHeight: "40px" }}>
                        <li>+998918553235</li>
                        <li>ageny61@gmail.com</li>
                        <li>Navoiy sh, Islom Karimov 3A 30</li>
                    </ul>
                </Box>
            </Stack>
        </Box>
    );
}

export default Footer;

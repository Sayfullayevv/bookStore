import { Stack, Typography, Box } from "@mui/material";
import React from "react";

function Statistic() {
    return (
        <Box mt={"80px"} borderBottom={"1px solid black"} p={"30px 0"}>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    flexDirection={"column"}
                >
                    <Typography
                        variant="body1"
                        style={{
                            fontWeight: "bold",
                            fontFamily: "Playfair Display, serif",
                        }}
                        sx={{
                            textAlign: {
                                xs: "center",
                                sm: "center",
                                md: "center",
                                lg: "inherit",
                                xl: "inherit",
                            },
                        }}
                    >
                        Eng zo'r kitoblar
                    </Typography>
                    <Typography
                        variant="h1"
                        style={{
                            fontWeight: "700",
                        }}
                        sx={{
                            fontSize: {
                                xs: "30px",
                                sm: "30px",
                                md: "40px",
                                lg: "45px",
                                xl: "50px",
                            },
                        }}
                    >
                        100K+
                    </Typography>
                </Box>
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    flexDirection={"column"}
                >
                    <Typography
                        variant="body1"
                        style={{
                            fontWeight: "bold",
                            fontFamily: "Playfair Display, serif",
                        }}
                        sx={{
                            textAlign: {
                                xs: "center",
                                sm: "center",
                                md: "center",
                                lg: "inherit",
                                xl: "inherit",
                            },
                        }}
                    >
                        Dunyo bo'ylab yozuvchilar
                    </Typography>
                    <Typography
                        variant="h1"
                        style={{
                            fontWeight: "700",
                        }}
                        sx={{
                            fontSize: {
                                xs: "30px",
                                sm: "30px",
                                md: "40px",
                                lg: "45px",
                                xl: "50px",
                            },
                        }}
                    >
                        80K+
                    </Typography>
                </Box>
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    flexDirection={"column"}
                >
                    <Typography
                        variant="body1"
                        style={{
                            fontWeight: "bold",
                            fontFamily: "Playfair Display, serif",
                        }}
                        sx={{
                            textAlign: {
                                xs: "center",
                                sm: "center",
                                md: "center",
                                lg: "inherit",
                                xl: "inherit",
                            },
                        }}
                    >
                        Doimiy kitobxonlar
                    </Typography>
                    <Typography
                        variant="h1"
                        style={{
                            fontWeight: "700",
                        }}
                        sx={{
                            fontSize: {
                                xs: "30px",
                                sm: "30px",
                                md: "40px",
                                lg: "45px",
                                xl: "50px",
                            },
                        }}
                    >
                        154K+
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
}

export default Statistic;

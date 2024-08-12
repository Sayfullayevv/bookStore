import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { AllBooks } from "../../constants/tools";
import { Link } from "react-router-dom";

function Popular() {
    return (
        <>
            <Box mt={"40px"}>
                <Typography
                    variant="h5"
                    m={"10px 0"}
                    style={{
                        fontFamily: "Playfair Display",
                    }}
                >
                    Mashhur kitoblar
                </Typography>
                <Stack direction={"row"} flexWrap={"wrap"} gap={"36px"}>
                    {AllBooks.slice(0, 6).map((e) => {
                        return (
                            <Link
                                to={`book/${e.bookid}`}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                <Box>
                                    <img
                                        src={e.image}
                                        width={"160px"}
                                        height={"220px"}
                                        alt=""
                                    />
                                    <div className="popular__book-details">
                                        <Typography
                                            width={"135px"}
                                            variant="body1"
                                        >
                                            {e.name}
                                        </Typography>
                                        <Typography variant="body2">
                                            {e.author}
                                        </Typography>
                                    </div>
                                </Box>
                            </Link>
                        );
                    })}
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
                                }}
                            >
                                Ko'proq
                            </Button>
                        </Link>
                    </Box>
                </Stack>
            </Box>
        </>
    );
}

export default Popular;

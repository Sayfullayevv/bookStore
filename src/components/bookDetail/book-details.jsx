import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AllBooks } from "../../constants/tools";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Footer from "../footer/footer";

function BookDetails({ getLink, getBook, customBtn }) {
    const [detail, setDetail] = useState("");
    const { id } = useParams();
    const [bookFavourite, setBookFavourite] = useState([]);
    useEffect(() => {
        AllBooks.forEach((e) => {
            if (e.bookid == id) {
                setDetail(e);
            }
        });
    }, id);
    const getBookFavourite = () => {
        setBookFavourite([...bookFavourite, detail]);
    };
    const catchBook = () => {
        getBook(detail);
    };
    return (
        <Container fixed>
            <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                height={"50px"}
            >
                <Box
                    className="searchInput"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    width={"340px"}
                >
                    <input
                        type="text"
                        placeholder="Kitobni qidirish..."
                        style={{
                            border: "none",
                            width: "200px",
                            background: "transparent",
                            outline: "none",
                        }}
                    />
                    <SearchOutlinedIcon className="searchIcon" />
                </Box>
                <Box
                    display={"flex"}
                    width={"235px"}
                    justifyContent={"space-between"}
                >
                    <Box
                        className="accountName"
                        display={"flex"}
                        justifyContent={"space-evenly"}
                    ></Box>
                    <Box
                        className="notification"
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-around"}
                    >
                        <Link to={"/cart"}>
                            <ShoppingCartOutlinedIcon
                                style={{ marginRight: "15px" }}
                            />
                        </Link>
                    </Box>
                </Box>
            </Stack>

            <Container maxWidth="sm">
                <Stack
                    mt={"40px"}
                    sx={{
                        flexDirection: {
                            xs: "column",
                            sm: "column",
                            md: "column",
                            lg: "row",
                            xl: "row",
                        },
                        alignItems: {
                            xs: "center",
                        },
                    }}
                >
                    <Box className="bookdetail-img">
                        <img
                            src={detail.image}
                            width={"220px"}
                            height={"320px"}
                            alt=""
                        />
                    </Box>
                    <Box ml={"20px"}>
                        <Typography
                            variant="h3"
                            mb={"10px"}
                            style={{
                                fontFamily: "Playfair Display, serif",
                            }}
                        >
                            {detail.name}
                        </Typography>
                        <Typography
                            variant="body1"
                            mb={"10px"}
                            style={{
                                fontFamily: "Playfair Display, serif",
                                fontWeight: "600",
                                letterSpacing: "2px",
                            }}
                        >
                            {detail.author}
                        </Typography>
                        <Typography
                            style={{
                                fontFamily: "Playfair Display, serif",
                                fontStyle: "italic",
                            }}
                            variant="body2"
                        >
                            {detail.shortSummary}
                        </Typography>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Button
                                variant="contained"
                                style={{
                                    marginTop: "20px",
                                    background: "#272935",
                                }}
                                onClick={catchBook}
                            >
                                {customBtn}
                            </Button>
                            <div>
                                <button
                                    style={{
                                        background: "transparent",
                                        border: "none",
                                        outline: "none",
                                    }}
                                >
                                    <FavoriteBorderOutlinedIcon
                                        style={{
                                            marginTop: "22px",
                                            fontSize: "25px",
                                            marginRight: "10px",
                                            cursor: "pointer",
                                        }}
                                    />
                                </button>
                                <button
                                    style={{
                                        background: "transparent",
                                        border: "none",
                                        outline: "none",
                                    }}
                                    onClick={getLink}
                                >
                                    <ShareOutlinedIcon
                                        style={{
                                            marginTop: "22px",
                                            fontSize: "25px",
                                            marginRight: "10px",
                                            cursor: "pointer",
                                        }}
                                    />
                                </button>
                            </div>
                        </div>
                    </Box>
                </Stack>
            </Container>
            <Container
                maxWidth="md"
                style={{
                    marginTop: "30px",
                }}
            >
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <div
                        className="left-book-detail-elements"
                        style={{ width: "600px" }}
                    >
                        <Typography variant="h6" mb={"10px"}>
                            Kitobga ta'rif
                        </Typography>
                        <Typography>{detail.description}</Typography>
                    </div>
                    <div className="right-book-detail-elements">
                        <div
                            className="editors"
                            style={{ marginBottom: "30px" }}
                        >
                            <Typography variant="h6">Tahrirchilar:</Typography>
                            <Typography>{detail.editors}</Typography>
                        </div>
                        <div className="language">
                            <Typography variant="h6">Til</Typography>
                            <Typography>{detail.language}</Typography>
                        </div>
                    </div>
                </Stack>
            </Container>
            <br />
            <br />
            <br />
            <Footer bookFavourite={bookFavourite} />
        </Container>
    );
}

export default BookDetails;

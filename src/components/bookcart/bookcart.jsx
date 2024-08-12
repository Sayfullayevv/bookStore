import {
    Box,
    Button,
    Container,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

function Bookcart({ book }) {
    let convertArray = JSON.parse(book);
    const [convertArrayJS, setConvertArrayJS] = useState(convertArray);
    const [filterName, setFilterName] = useState();

    let getE = () => {};
    return (
        <Container fixed>
            {convertArrayJS ? (
                <Typography
                    variant="h6"
                    fontWeight={"100"}
                    m={"20px 0"}
                    sx={{
                        textAlign: {
                            xs: "center",
                        },
                    }}
                >
                    Sizning kitoblaringiz
                </Typography>
            ) : (
                <Typography></Typography>
            )}

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "repeat(1, 1fr)",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                        xl: "repeat(3, 1fr)",
                    },
                    columnGap: {
                        sm: "20px",
                        lg: "1px",
                    },
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    marginLeft: {
                        lg: "50px",
                    },
                    paddingBottom: "50px ",
                }}
            >
                {convertArrayJS != null ? (
                    convertArray.map((e, id) => {
                        return (
                            <>
                                <Stack
                                    columnGap={"20px"}
                                    marginBottom={"30px"}
                                    style={{
                                        background: "white",
                                        boxShadow: "1px 1px 10px #d4d3c9",
                                        borderRadius: "7px",
                                    }}
                                    sx={{
                                        width: {
                                            xs: "80%",
                                            sm: "75%",
                                            lg: "70%",
                                        },
                                        padding: {
                                            xs: "20px 28px",
                                            sm: "20px 40px",
                                        },
                                    }}
                                >
                                    <Box
                                        display={"flex"}
                                        flexDirection={"row"}
                                        width={"104%"}
                                        justifyContent={"space-between"}
                                    >
                                        {/* Book Image */}
                                        <img
                                            src={e.image}
                                            width={"100px"}
                                            alt=""
                                            style={{}}
                                        />
                                        {/* Book name and deadline */}
                                        <Box padding={"0 20px"}>
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    marginBottom: "2px",
                                                }}
                                            >
                                                {e.name != undefined
                                                    ? e.name.length > 6
                                                        ? e.name.slice(0, 6) +
                                                          "..."
                                                        : e.name
                                                    : "Error"}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                marginBottom={"3px"}
                                            >
                                                Kunni tanlang:
                                            </Typography>
                                            <select
                                                name=""
                                                id=""
                                                style={{
                                                    padding: "4px",
                                                    outline: "none",
                                                }}
                                            >
                                                <option value="">7 kun</option>
                                                <option value="">14 kun</option>
                                                <option value="">21 kun</option>
                                            </select>
                                            {/* Buttons */}
                                            <Box
                                                sx={{
                                                    marginTop: "10px",
                                                    display: {
                                                        xs: "flex",
                                                    },
                                                }}
                                            >
                                                <Button
                                                    variant="contained"
                                                    style={{
                                                        background: "#272935",
                                                        fontSize: "11px",
                                                    }}
                                                    sx={{
                                                        width: {
                                                            xs: "70px",
                                                            lg: "120px",
                                                        },
                                                    }}
                                                >
                                                    Olish
                                                </Button>
                                                <IconButton
                                                    aria-label="delete"
                                                    onClick={
                                                        (getE = () => {
                                                            convertArray =
                                                                convertArray.filter(
                                                                    (
                                                                        bookName
                                                                    ) => {
                                                                        return (
                                                                            bookName.name !==
                                                                            e.name
                                                                        );
                                                                    }
                                                                );
                                                            setConvertArrayJS(
                                                                convertArray
                                                            );
                                                        })
                                                    }
                                                    style={{
                                                        color: "black",
                                                        borderColor: "black",
                                                    }}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Stack>
                            </>
                        );
                    })
                ) : (
                    <Typography>Savatingiz hozircha bo'sh</Typography>
                )}
            </Box>
        </Container>
    );
}

export default Bookcart;

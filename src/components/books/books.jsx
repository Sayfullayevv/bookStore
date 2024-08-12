import { Box, Container, Stack, Typography, Button } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Pagination from "@mui/material/Pagination";

function Books({ AllBooks }) {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = AllBooks.slice(firstIndex, lastIndex);
    const npage = Math.ceil(AllBooks.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    return (
        <>
            <Box className="books">
                <Container
                    fixed
                    style={{
                        paddingBottom: "150px",
                    }}
                >
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        height={"50px"}
                        sx={{
                            marginLeft: {
                                lg: "30px",
                            },
                        }}
                    >
                        <Box
                            className="searchInput"
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            sx={{
                                lg: "200px",
                            }}
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

                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems={"center"}
                        justifyContent={"center"}
                        textAlign={"center"}
                    >
                        <Stack textAlign={"center"}>
                            <Typography
                                marginTop={"50px"}
                                variant="h2"
                                sx={{
                                    fontSize: {
                                        xs: "25px",
                                        sm: "32px",
                                        md: "32px",
                                        lg: "32px",
                                        xl: "32px",
                                    },
                                }}
                            >
                                Keep the story going...
                            </Typography>
                            <Typography
                                marginTop={"20px"}
                                variant="p"
                                sx={{
                                    width: {
                                        xs: "300px",
                                        sm: "500px",
                                        md: "500px",
                                        lg: "800px",
                                        xl: "500px",
                                    },
                                    fontSize: {
                                        xs: "14px",
                                        sm: "20px",
                                    },
                                }}
                            >
                                Don't let the story and just yet. Continue
                                reading your last book and immerse yourself in
                                the world of literature
                            </Typography>
                        </Stack>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                display: "grid",
                                gridGap: {
                                    sm: "20px",
                                    lg: "30px",
                                    xl: "30px",
                                },
                                marginTop: "50px",

                                gridTemplateColumns: {
                                    xs: "repeat(1 , 1fr)",
                                    sm: "repeat(2 , 1fr)",
                                    md: "repeat(2 , 1fr)",
                                    lg: "repeat(4 , 1fr)",
                                    xl: "repeat(4 , 1fr)",
                                },
                                position: "absolute",
                                left: "50%",
                                transform: "translateX(-50%)",
                            }}
                        >
                            {AllBooks.map((e) => {
                                return (
                                    <Link
                                        to={`../book/${e.bookid}`}
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: {
                                                    xs: "fit-content",
                                                    sm: "fit-content",
                                                    md: "250px",
                                                    lg: "250px",
                                                },
                                            }}
                                        >
                                            <img
                                                src={e.image}
                                                width={"250px"}
                                                alt=""
                                                height={"350px"}
                                            />
                                            <Typography
                                                fontSize={"20px"}
                                                marginTop={"10px"}
                                            >
                                                {e.name}
                                            </Typography>
                                        </Box>
                                    </Link>
                                );
                            })}
                        </Box>
                    </Box>
                    <nav>
                        <ul className="pagination">
                            <li className="page-item">
                                <a
                                    href="#"
                                    className="page-link"
                                    // onClick={prePage}
                                ></a>
                            </li>
                        </ul>
                    </nav>
                </Container>
            </Box>
        </>
    );
}

export default Books;

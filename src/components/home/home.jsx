import { Box, Button, Container, Stack, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import Books from "../books/books";
import Popular from "../popular/popular";
import Statistic from "../statistic/statistic";
import Collections from "../collections/collections";
import Footer from "../footer/footer";

function Home() {
    return (
        <>
            <Box className="home">
                <Container
                    fixed
                    style={{
                        overflow: "hidden",
                    }}
                >
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
                    {/*  */}
                    <Stack
                        sx={{
                            flexDirection: {
                                xs: "column",
                                sm: "column",
                                md: "row",
                                lg: "row",
                                xl: "row",
                            },
                        }}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                    >
                        <Box
                            className="home__main-texts"
                            height={"360px"}
                            justifyContent={"space-evenly"}
                            display={"flex"}
                            flexDirection={"column"}
                        >
                            <span
                                style={{
                                    width: "fit-content",
                                    padding: "5px 10px",
                                    border: "1px solid #272935",
                                }}
                            >
                                Yangi kitob
                            </span>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "32px",
                                        sm: "44px",
                                        md: "30px",
                                        lg: "45px",
                                        xl: "30px",
                                    },
                                }}
                            >
                                Izlash
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    width: {
                                        xs: "100%",
                                        sm: "100%",
                                        md: "100%",
                                        lg: "400px",
                                        xl: "400px",
                                    },
                                    fontSize: {
                                        xs: "16px",
                                        sm: "19px",
                                        md: "15px",
                                        lg: "15px",
                                        xl: "15px",
                                    },
                                }}
                            >
                                Hayotining bahorida so‘ligan navnihol... Maishiy
                                zo‘ravonlik, qotillik, ko‘cha hayoti,
                                giyohvandlik, yetimlik, afsus-nadomat va ruhiy
                                azoblarni boshdan kechirgan yoshgina yigitcha
                                Mehmed haqida.
                            </Typography>
                            <Link to={"book/izlash"}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: "#272935",
                                        width: "200px",
                                        borderRadius: "20px",
                                        ":hover": {
                                            background: "#fdfcf7",
                                            color: "#272935",
                                        },
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "12px",
                                        }}
                                    >
                                        {" "}
                                        Kitobni band qilish
                                    </span>
                                </Button>
                            </Link>
                        </Box>
                        <Box className="home__main-image">
                            <img
                                src="https://i.ibb.co/2vW1jJt/2024-02-09-T17-27-43-001-Z-2023-07-22-T14-22-56-282-Z-photo-4-2023-07-22-19-20-17-removebg-preview.png"
                                alt=""
                                width={"340px"}
                            />
                        </Box>
                        <Box
                            className="home__main-texts-second"
                            height={"250px"}
                            justifyContent={"space-evenly"}
                            display={"flex"}
                            flexDirection={"column"}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: {
                                        xs: "32px",
                                        sm: "40px",
                                        md: "44px",
                                        lg: "48px",
                                        xl: "48px",
                                    },
                                    textAlign: "center",
                                }}
                            >
                                Jalb qiluvchi sahna
                            </Typography>
                            <Typography
                                sx={{
                                    textAlign: {
                                        xs: "center",
                                        sm: "center",
                                        lg: "inherit",
                                    },
                                }}
                            >
                                <span
                                    style={{
                                        color: "red",
                                    }}
                                >
                                    154
                                </span>
                                /300 sahifa
                            </Typography>
                            <Typography
                                width={"340px"}
                                sx={{
                                    width: {
                                        xs: "100%",
                                        sm: "100%",
                                        md: "100%",
                                        lg: "340px",
                                        xl: "340px",
                                    },
                                }}
                            >
                                Mehmet Fotima ustozi yordami bilan to'laqonli
                                giyohvand moddalardan kechgani va ustozidan
                                turli xil bilimlarni o'zlashtirishga
                                kirishganini o'qish orqali siz o'zingizni asar
                                qahramonidek his qilasiz.
                            </Typography>
                        </Box>
                    </Stack>
                    <Popular />
                    <Statistic />
                    <Footer />
                </Container>
            </Box>
        </>
    );
}

export default Home;

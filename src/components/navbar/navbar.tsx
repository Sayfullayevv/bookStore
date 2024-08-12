import { Box, Stack, Typography } from "@mui/material";
import { mainColor } from "../../constants/tools";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <Box
            className="navbox"
            sx={{
                width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "70px",
                    xl: "70px",
                },
                bottom: {
                    xs: "24px",
                    sm: "24px",
                    md: "24px",
                },
                height: {
                    xs: "0",
                    sm: "0",
                    md: "0",
                    lg: "100vh",
                    xl: "100vh",
                },
                background: "white",
            }}
        >
            <Stack
                height={"100%"}
                borderRight={"1px solid #DCDACF"}
                sx={{
                    flexDirection: {
                        xs: "row",
                        sm: "row",
                        md: "row",
                        lg: "column",
                        xl: "column",
                    },
                    position: "relative",
                }}
            >
                <Box
                    className="icons"
                    display={"flex"}
                    height={"250px"}
                    justifyContent={"space-between"}
                    sx={{
                        flexDirection: {
                            xs: "row",
                            sm: "row",
                            md: "row",
                            lg: "column",
                            xl: "column",
                        },
                        width: {
                            xs: "100%",
                            sm: "100%",
                            md: "100%",
                            lg: "100%",
                            xl: "100%",
                        },
                        height: {
                            xs: "fit-content",
                            sm: "fit-content",
                            md: "fit-content",
                            lg: "250px",
                            xl: "250px",
                        },
                        justifyContent: "space-between",
                        position: "absolute",
                        background: "white",
                        boxShadow: {
                            xs: "0px 10px 20px black",
                            sm: "0px 10px 20px black",
                            md: "0px 10px 20px black",
                            lg: "none",
                            xl: "none",
                        },
                        padding: {
                            xs: "8px 0",
                        },
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50% )",
                    }}
                >
                    <Link
                        to={"/"}
                        style={{
                            textDecoration: "none",
                            color: "black",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "0 10px",
                        }}
                    >
                        {" "}
                        <OtherHousesOutlinedIcon style={{ padding: "0 8px" }} />
                        <Typography variant="body2">Asosiy</Typography>
                    </Link>
                    <Link
                        to={"/books"}
                        style={{
                            textDecoration: "none",
                            color: "black",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <AutoStoriesOutlinedIcon style={{ padding: "0 8px" }} />
                        <Typography variant="body2">Kitoblar</Typography>
                    </Link>
                    <Link
                        to={"/saved"}
                        style={{
                            textDecoration: "none",
                            color: "black",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <TurnedInNotOutlinedIcon style={{ padding: "0 8px" }} />
                        <Typography variant="body2">Sevimlilar</Typography>
                    </Link>
                    <Link
                        to={"/profile"}
                        style={{
                            textDecoration: "none",
                            color: "black",
                            display: "flex",
                            alignItems: "center",
                            padding: "0 10px",
                            flexDirection: "column",
                        }}
                    >
                        <ManageAccountsOutlinedIcon
                            style={{ padding: "0 8px" }}
                        />
                        <Typography variant="body2">Sozlamalar</Typography>
                    </Link>
                </Box>
            </Stack>
        </Box>
    );
}

export default Navbar;

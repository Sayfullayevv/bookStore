import { Box, Container, Stack, Typography, Button } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from '@mui/material/Avatar';
import {useState} from 'react'

function Books({ AllBooks }) {
    console.log(AllBooks);


    const [hoveredIndex, setHoveredIndex] = useState(null);

    const images = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIvPmvVuVOpl3yRwFOYAyCOCardMkGkccUMQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIvPmvVuVOpl3yRwFOYAyCOCardMkGkccUMQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIvPmvVuVOpl3yRwFOYAyCOCardMkGkccUMQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIvPmvVuVOpl3yRwFOYAyCOCardMkGkccUMQ&s"
    ];

    return (
        <>
            <Box className="books">
                <Container fixed>
                <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        height={"50px"}
                    >
                        <Box
                            className="searchInput"
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            width={"340px"}
                        >
                            <SearchOutlinedIcon className="searchIcon" />
                            <input
                                type="text"
                                placeholder="Kitobni qidirish..."
                                style={{
                                    border: "none",
                                    width: "300px",
                                    background: "transparent",
                                    outline: "none",
                                }}
                            />
                        </Box>
                        <Box
                            display={"flex"}
                            width={"215px"}
                            justifyContent={"space-between"}
                        >
                            <Box
                                className="accountName"
                                display={"flex"}
                                alignItems={"center"}
                                width={"180px"}
                                justifyContent={"space-evenly"}
                            >
                                <img
                                    src="https://i.ibb.co/C8r4fXy/Screenshot-2024-07-06-160347.jpg"
                                    alt=""
                                    width={"38px"}
                                />
                                <Typography className="accountName-text">
                                    Sayfullayev H.
                                </Typography>
                            </Box>
                            <Box className="notification">
                                <NotificationsNoneOutlinedIcon />
                            </Box>
                        </Box>
                    </Stack>
                    <Box 
                        display="flex"
                        flexDirection="row">
                        <Stack>
                        <Typography 
                            marginTop={"50px"} 
                            variant="h2">
                                Keep the story going...
                        </Typography>
                        <Typography 
                            width={"500px"} 
                            marginTop={"20px"} 
                            variant="p">
                                Don't let the story and just yet. Continue reading your last book and immerse yourself in the world of literature
                        </Typography>
                        <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: "#272935",
                                        width: "150px",
                                        borderRadius: "20px",
                                        ":hover": {
                                            background: "#fdfcf7",
                                            color: "#272935",
                                        },
                                        marginTop: "30px"
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "12px",
                                        }}
                                    >
                                        {" "}
                                        Start reading
                                    </span>
                                </Button>
                        </Stack>
                        <Stack
                            className="home__main-texts-second"
                            height={"250px"}
                            marginTop={"-50px"}
                            justifyContent={"end"}
                            display={"flex"}
                            flexDirection={"column"}
                            marginLeft={"100px"}
                        >
                            <Stack 
                                    display={"flex"}
                                    flexDirection={"row"}
                                    width={"250px"}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Typography variant="h6" marginLeft={"15px"}>
                                    Goerge RR Martin
                                </Typography>
                            </Stack>
                            <Typography
                                variant="body2"
                                width={"370px"}
                                fontSize={"15px"}
                                marginTop={"20px"}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repudiandae enim, architecto ipsum hic officiis cupiditate quibusdam commodi neque facere voluptatem ratione? Quis aut illum illo est, minus id 
                            </Typography>
                        </Stack>
                    </Box>
                    <Box>
                        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '15px' }}>
                            {images.map((src, index) => (
                                <img
                                  key={index}
                                  src={src}
                                  alt={`Image ${index + 1}`}
                                  style={{
                                    width: '150px',
                                    transition: 'transform 0.3s ease',
                                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                                    cursor: 'pointer',
                                    marginLeft: '10px'
                                  }}
                                  onMouseEnter={() => setHoveredIndex(index)}
                                  onMouseLeave={() => setHoveredIndex(null)}
                                />
                                        ))}
                        </div>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default Books;

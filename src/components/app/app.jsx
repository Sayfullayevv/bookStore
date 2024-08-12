import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import {
    Home,
    Books,
    Navbar,
    BookDetails,
    Bookcart,
    Saved,
    Profile,
} from "../index";
import { AllBooks } from "../../constants/tools";
import Footer from "../footer/footer";

function App() {
    const getBooksLocalstorage = JSON.parse(localStorage.getItem("book"));

    const getLink = (url) => {
        url = window.location.href;
        navigator.clipboard.writeText(url);
        alert("Manzildan nusxa olindi!");
    };
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (getBooksLocalstorage != null) {
            const storedValue = localStorage.getItem("book");
            if (storedValue) {
                let resultBook = JSON.parse(storedValue);
                setCart(resultBook);
            }
        }
    }, []);
    const [customBtn, setCustomBtn] = useState("Kitobni band qilish");
    const [checkstate, setcheckstate] = useState(true);
    localStorage.setItem("state", checkstate);
    const getBook = (book) => {
        const updatedCart = [...cart, book];
        setCart(updatedCart);
        console.log(updatedCart);
        localStorage.setItem("book", JSON.stringify(updatedCart));
    };

    const removeBook = () => {};

    return (
        <>
            <Stack direction={"row"}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/books"
                        element={<Books AllBooks={AllBooks} />}
                    />
                    <Route
                        path="/book/:id"
                        element={
                            <BookDetails
                                getLink={getLink}
                                getBook={getBook}
                                customBtn={customBtn}
                            />
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <Bookcart book={localStorage.getItem("book")} />
                        }
                    />
                    <Route path="/saved" element={<Saved />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Stack>
        </>
    );
}

export default App;

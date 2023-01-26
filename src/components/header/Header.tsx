import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React from "react";
// import Navbar from "./navbar/Navbar";

interface IProps {
    handleOpenModal: () => void;
    closeModal: () => void;
}

const Header = (props: IProps) => {
    const {
        handleOpenModal,
        closeModal,
    }= props

    return (
        
        <header className="header">
            <div className="header__inner">
                <div className="header__logo">
                    <img src="img/Logo.jpg" alt="Logo"></img>
                </div>
                <div>
                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="outlined"
                            onClick={handleOpenModal}
                        >Open tasks form</Button>
                        <Button 
                            variant="outlined"
                            color="error"
                            onClick={closeModal}
                        >Close form</Button>
                    </Stack>
                </div>
                {/* < Navbar /> */}
            </div>
        </header>
    )
};

export default Header;
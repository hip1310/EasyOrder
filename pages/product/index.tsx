"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@components/AuthContext";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "../styles.module.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Product from "@/components/Product";
import FilterContainer from "@/components/FilterContainer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Home() {
  const auth = useAuth()?.auth;
  const logout = useAuth()?.logout;
  const getUserDetail = useAuth()?.getUserDetail;

  const router = useRouter();
  const [firstName, setFirstName] = useState("");

  const handleLogout = async () => {
    // await logout()
    router.push("/");
  };

  const fetchUserDetails = async () => {
    const userData = await getUserDetail();
    if (userData) {
      setFirstName(userData?.user.data.firstName);
    }
  };

  useEffect(() => {
    // if (!auth?.token) {
    //   router.push('/');
    // } else {
    //   fetchUserDetails()
    // }
  }, [auth?.token, router]);

  const [selected, setSelected] = React.useState("left");
  const [devices, setDevices] = React.useState(() => ["phone"]);

  const handleSelected = (
    event: React.MouseEvent<HTMLElement>,
    newSelection: string | null
  ) => {
    if (newSelection !== null) {
      setSelected(newSelection);
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={styles.dark_navbar}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
            <Button color="inherit" onClick={() => router.push("/orders")}>
                  Orders
                </Button>
            <Button color="inherit" onClick={() => handleLogout()}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <h4 className="p-3">
        <b>
          <ArrowBackIcon
            onClick={() => {
              router.push("/home");
            }}
          />
          Products
        </b>
      </h4>
      {/* <FilterContainer/> */}
      <div className="row" style={{marginRight:"0"}}>
        <div
          className="col-3"
          style={{ paddingTop: "50px", textAlign: "center" }}
        >
          <Product />
        </div>
      </div>

      {/* <ToggleButtonGroup
        value={selected}
        exclusive
        onChange={handleSelected}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          Vendors
        </ToggleButton> */}
      {/* </ToggleButtonGroup> */}
      {/* </h4> */}
    </>
  );
}

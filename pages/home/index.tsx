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
import Link from "next/link";
import { Card } from "@mui/material";
import Image from "next/image";
import emotionStyled from "@emotion/styled";
import {
  StarBorderRounded,
  StarHalfRounded,
  StarOutlineRounded,
  StarRounded,
} from "@mui/icons-material";

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
      <FilterContainer />
      <div
        className="row"
        style={{
          paddingLeft: "0.75rem",
          marginRight: "0",
          marginLeft: "120px",
          justifyContent: "center",
          gap: "48px",
        }}
      >
        <CustomVendorCards>
          <div>
            <Image
              alt="vendor"
              width="350"
              height="150"
              src="https://www.freeiconspng.com/uploads/coca-cola-text-logo-png-31.png"
            />
            <div className="vendor-name">
              <b className="text-center">Vendor 1</b>
            </div>
            <div className="text-left">
              <p>
                <b>Categories:</b> F&B, Kitchen
              </p>
              <div className="flex">
                <b>Rating:</b>
                <div className="rating-container">
                  <StarRounded />
                  <StarRounded />
                  <StarRounded />
                  <StarHalfRounded />
                  <StarBorderRounded />
                </div>
              </div>
            </div>
          </div>
          <Button
            className="visit-store-btn"
            onClick={() => {
              router.push("/product");
            }}
          >
            Visit Store
          </Button>
        </CustomVendorCards>

        <CustomVendorCards>
          <div>
            <Image
              alt="vendor"
              width="350"
              height="150"
              src="https://www.freeiconspng.com/uploads/hd-blue-red-logo-design-png-transparent-background-21.png"
            />

            <div className="vendor-name">
              <b className="text-center">Vendor 2</b>
            </div>
            <div className="text-left">
              <p>
                <b>Categories:</b> Electronics, Mobile
              </p>
              <div className="flex">
                <b>Rating:</b>
                <div className="rating-container">
                  <StarRounded />
                  <StarRounded />
                  <StarRounded />
                  <StarRounded />

                  <StarBorderRounded />
                </div>
              </div>
            </div>
          </div>
          <Button
            className="visit-store-btn"
            onClick={() => {
              router.push("/product");
            }}
          >
            Visit Store
          </Button>
        </CustomVendorCards>

        <CustomVendorCards>
          <div>
            <Image
              alt="vendor"
              width="350"
              height="150"
              src="https://www.freeiconspng.com/uploads/circle-green-jx-logo-png-icon-26.png"
            />

            <div className="vendor-name">
              <b className="text-center">Vendor 3</b>
            </div>
            <div className="text-left">
              <p>
                <b>Categories:</b> Home, Appliances
              </p>
              <div className="flex">
                <b>Rating:</b>
                <div className="rating-container">
                  <StarRounded />
                  <StarRounded />
                  <StarRounded />
                  <StarRounded />

                  <StarHalfRounded />
                </div>
              </div>
            </div>
          </div>
          <Button
            className="visit-store-btn"
            onClick={() => {
              router.push("/product");
            }}
          >
            Visit Store
          </Button>
        </CustomVendorCards>
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

const CustomVendorCards = emotionStyled(Card)`
 && { 
  margin-top:16px;
  width:250px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 16px;
  gap:12px;
  :hover{
    img{scale:1.1;}
  }
  img{
    width:100%;
    
    transition: all 0.5s linear;
  }
  .vendor-name{
    text-align:center;
    margin: 16px 0;
  }
  .visit-store-btn{
    background:rgb(221, 208, 200);
    border-radius: 15px;
    width: 100%;
    color: black;
    font-weight: bold;
    :hover{
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
    }
  }
  
}
 
`;

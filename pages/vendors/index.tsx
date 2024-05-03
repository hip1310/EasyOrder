"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@components/AuthContext";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "../styles.module.css";
import DenseTable from "@/components/VendorTable";

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

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={styles.dark_navbar}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin Panel
            </Typography>
            <Button color="inherit" onClick={() => handleLogout()}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ marginLeft: "10px", marginRight: "10px" }}>
        <br />
        <h3>
          <b>Vendors</b>
          <Button
            variant="contained"
            style={{ background: "#333", float: "right" }}
            onClick={() => {
              router.push("/add-vendors");
            }}
          >
            Add Vendors
          </Button>
        </h3>

        <br />
        <DenseTable />
      </div>
    </>
  );
}

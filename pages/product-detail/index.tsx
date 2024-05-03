"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import styles from "../styles.module.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Controller, useForm } from "react-hook-form";
import Input from "@/components/Input";
import { MenuItem, Select } from "@mui/material";

const ProductDetails = () => {
  const router = useRouter();

  type PlaceOrder = {
    Qty: string;
    size: string;
  };
  const { handleSubmit, control, formState, getValues } = useForm<PlaceOrder>();

  const handleLogout = async () => {
    // await logout()
    router.push("/");
  };

  const getPrice = () => {
    let price;
    const size = getValues("size");
    switch (size) {
      case "16oz":
        return "5";
      case "20oz":
        return "10";
      case "case": //12
        return "120";
      case "carton": //24
        return "240";
    }
    return price;
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
      <div className=" mx-5 mt-20 pb-16">
        <div className="row">
          <div className="col-6">
            <img
              style={{ height: "500px" }}
              src={"images/coca-cola.webp"}
              className="w-full object-fill h-3/4"
            />
          </div>
          <div className="col-6" style={{ marginTop: "50px" }}>
            <h3 className="text-xl font-bold mb-2">
              <ArrowBackIcon
                onClick={() => {
                  router.push("/product");
                }}
              />
              {"coca-cola"}
            </h3>
            <p
              className="text-xl font-bold mb-2"
              style={{ marginLeft: "30px" }}
            >
              It’s Coca‑Cola, only spiced. Coca‑Cola Spiced transforms the
              familiar into the extraordinary.
            </p>
            <p style={{ marginLeft: "30px" }}>
              <b>Price :</b> {getPrice() || 10}
            </p>
            <div style={{ marginLeft: "30px" }}>
              <b>Available Size :</b>
              <Controller
                name="size"
                defaultValue="20oz"
                control={control}
                render={({ field }) => (
                  <Select
                    style={{ marginLeft: "10px" }}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  >
                    <MenuItem value={"16oz"}>16oz</MenuItem>
                    <MenuItem value={"20oz"}>20oz</MenuItem>
                    <MenuItem value={"case"}>case</MenuItem>
                    <MenuItem value={"carton"}>carton</MenuItem>
                  </Select>
                )}
              />
            </div>
            <Input
              control={control}
              style={{ marginLeft: "30px", width: "200px", marginTop: "10px" }}
              formState={formState}
              name="Qty"
              label="Qty"
              type="number"
            />
            <div style={{ marginLeft: "30px", marginTop: "10px" }}>
              <b>Expected Delivery : 2-3 days</b>
            </div>
            <br />
            <Button
              variant="contained"
              style={{
                background: "#333",
                width: "200px",
                marginLeft: "30px",
                marginTop: "20px",
              }}
              onClick={() => {
                router.push("/payment-status");
              }}
            >
              Buy
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;

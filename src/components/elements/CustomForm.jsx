import React from "react";

import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutations";

import { Paper, Grid, TextField, Button } from "@mui/material";

import { toast } from "react-toastify";

const CustomForm = ({ slug }) => {
  const [input, setInput] = React.useState({
    name: "",
    email: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const [sendComment, { loading, error }] = useMutation(SEND_COMMENT, {
    variables: { name: input.name, email: input.email, text: input.text, slug },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (input.name && input.email && input.text) {
      sendComment();
      if (!loading) {
        toast.success("نظر شما ارسال شد و منتظر تایید می‌باشد", {
          rtl: true,
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setInput({
          name: "",
          email: "",
          text: "",
        });
      } else if (error) {
        toast.error("مشکلی در سرور رخ داده‌است", {
          rtl: true,
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.warn("تمام فیلد ها را پر کنید", {
        rtl: true,
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <Paper
      component="form"
      sx={{ p: 2.5 }}
      elevation={2}
      noValidate
      onSubmit={onSubmit}
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            name="name"
            label="نام کاربری"
            value={input.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            name="email"
            label="ایمیل"
            value={input.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            variant="outlined"
            fullWidth
            minRows={4}
            name="text"
            label="متن"
            value={input.text}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Button
            sx={{ fontWeight: 800 }}
            variant="contained"
            fullWidth
            size="large"
            type="submit"
            disabled={loading}
          >
            {loading ? "در حال ارسال" : "ارسال"}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CustomForm;

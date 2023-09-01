import React from "react";

import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutations";

import { Box, Grid, TextField, Button } from "@mui/material";

import { toast } from "react-toastify";

function FormElement({ slug }) {
  const [input, setInput] = React.useState({
    name: "",
    email: "",
    text: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const [sendComment, { loading, error }] = useMutation(SEND_COMMENT, {
    variables: { name: input.name, email: input.email, text: input.text, slug },
  });

  const sendCommentHandler = () => {
    if (input.name && input.email && input.text) {
      sendComment();
      if (!loading) {
        toast.success("نظر شما ارسال شد و منتظر تایید می‌باشد.", {
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
        toast.error("مشکلی رخ داده‌است.", {
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
      toast.warn("تمام فیلد‌ها را پر کنید.", {
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
    <Box
      component="div"
      bgcolor="white"
      p={2}
      borderRadius={3}
      boxShadow="0 5px 10px rgba(0,0,0,0.1)"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            name="name"
            value={input.name}
            label="نام کاربری"
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            name="email"
            value={input.email}
            label="ایمیل"
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            multiline
            minRows={4}
            name="text"
            value={input.text}
            label="متن"
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          {loading ? (
            <Button
              sx={{ fontWeight: 800 }}
              variant="contained"
              disabled
              fullWidth
              size="large"
            >
              در حال ارسال
            </Button>
          ) : (
            <Button
              sx={{ fontWeight: 800 }}
              variant="contained"
              fullWidth
              size="large"
              onClick={sendCommentHandler}
            >
              ارسال
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default FormElement;

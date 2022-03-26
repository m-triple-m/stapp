import {
  Card,
  CardContent,
  CardMedia,
  Container,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";

const AddBlog = () => {
  const blogForm = {
    author: "",
    title: "",
    description: "",
    tags: "",
    thumbnail: "",
    data: {},
  };

  const submitBlog = (formdata) => {
    console.log(formdata);
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <CardMedia />
          <Formik initialValues={blogForm} onSubmit={submitBlog}>
            {({ values, handleSubmit, handleChange, errors }) => (
              <form>
                <TextField
                  id="title"
                  value={values.title}
                  onChange={handleChange}
                  label="Title"
                  variant="outlined"
                />
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddBlog;

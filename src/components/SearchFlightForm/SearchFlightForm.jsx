import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Box, Button, FormControlLabel } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  seacrchForm: {
    maxWidth: "30rem",
    margin: "auto",
  },
}));

const SearchFlightForm = (props) => {
  const classes = useStyles();

  const initialValues = {
    sourceCity: "",
    destinationCity: "",
  };

  const validationSchema = Yup.object({
    sourceCity: Yup.string().required("Required"),
    destinationCity: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    props.setsrcdesFilter(values);
    setSubmitting(false);
  };

  return (
    <Paper style={{ padding: "0.5rem" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className={classes.loginForm}>
              <Box margin={1}>
                <Field
                  component={TextField}
                  name="sourceCity"
                  type="text"
                  label="Source City"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Box>
              <Box margin={1}>
                <Field
                  component={TextField}
                  type="text"
                  label="Destination City"
                  name="destinationCity"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Box>
              <Box margin={1}>
                <Button
                  variant="outlined"
                  size="small"
                  color="secondary"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Search
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Paper>
  );
};

export default SearchFlightForm;

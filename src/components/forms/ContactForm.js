import React from 'react';
import {Formik} from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
};

const useStyles = makeStyles(theme => ({
  textField: {
    marginTop: theme.spacing(4),
  },
  input: {
    fontFamily: theme.typography.body1.fontFamily
  },
  submitButton: {
    marginTop: theme.spacing(6),
  }
}));

export default function ContactForm({handleClose, ...rest}) {
  const classes = useStyles();

  return (
      <Formik
          initialValues={{name: '', email: '', message: ''}}
          onSubmit={(values, {setSubmitting, resetForm}) => {
            fetch("/?no-cache=1", {
              method: 'POST',
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
              body: encode({
                'form-name': 'contact',
                ...values,
              }),
            })
                .then(() => {
                  handleClose();
                  resetForm({
                    values: {name: '', email: '', message: ''}
                  });
                  setSubmitting(false);
                })
                .catch(error => {
                  console.log(error);
                  alert('Error: Please Try Again!');
                  setSubmitting(false)
                })
          }}
          {...rest}
      >
        {({
            isSubmitting,
            handleSubmit,
            handleChange,
            values
          }) => {
          return (
              <form onSubmit={handleSubmit} name="contact" netlify-honeypot="bot-field" data-netlify="true">
                <TextField
                    onChange={handleChange}
                    value={values.name}
                    className={classes.textField}
                    InputProps={{className: classes.input}}
                    autoComplete="name"
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    placeholder="Full Name"
                />
                <TextField
                    onChange={handleChange}
                    value={values.email}
                    className={classes.textField}
                    InputProps={{className: classes.input}}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    placeholder="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                />
                <TextField
                    onChange={handleChange}
                    value={values.message}
                    className={classes.textField}
                    InputProps={{className: classes.input}}
                    variant="outlined"
                    required
                    fullWidth
                    name="message"
                    placeholder="Message"
                    id="message"
                    multiline
                    rows='8'
                />
                <Button
                    className={classes.submitButton}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                >
                  Send Message
                </Button>
              </form>
          )
        }}
      </Formik>
  )
}

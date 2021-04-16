import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { withFormik, FormikProps } from "formik";
import * as yup from "yup";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 600,
      background: "none",
      position: "relative",
      zIndex: 0,
      "&::after": {
        content: '""',
        opacity: ".8",
        zIndex: -1,
        backgroundColor: "#708090",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      },
    },
    container: {
      display: "Flex",
      justifyContent: "center",
    },
    actions: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    textField: {
      color: "#ffffff!important",
    },
  })
);

const validationsForm = {
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Informe um email válido")
    .required("O email é obrigatório"),
  phone: yup
    .string()
    .min(10, "O telefone precisa ter pelo menos 10 caracteres")
    .max(11, "O telefone precisa ter no máximo 11 caracteres"),
  subject: yup.string().required("O assunto é obrigatório"),
  message: yup.string().required("A mensagem é obrigatória"),
};

// Shape of form values
interface FormValues {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const form = (props: FormikProps<FormValues>) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <Card className={classes.card}>
          <CardContent>
            <TextField
              InputProps={{
                className: classes.textField,
              }}
              id="name"
              label="Nome"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.name ? errors.name : ""}
              error={touched.name && Boolean(errors.name)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.email ? errors.email : ""}
              error={touched.email && Boolean(errors.email)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="phone"
              label="Telefone"
              type="text"
              inputProps={{
                minLength: 10,
                maxLength: 11,
              }}
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.phone ? errors.phone : ""}
              error={touched.phone && Boolean(errors.phone)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="subject"
              label="Assunto"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.subject ? errors.subject : ""}
              error={touched.subject && Boolean(errors.subject)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="message"
              label="Mensagem"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.message ? errors.message : ""}
              error={touched.message && Boolean(errors.message)}
              multiline
              rows={6}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </CardContent>
          <CardActions className={classes.actions}>
            <Button type="submit" color="primary" disabled={isSubmitting}>
              Enviar
            </Button>
            <Button color="secondary" onClick={handleReset}>
              Cancelar
            </Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
};

interface MyFormProps {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const Form = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: ({ name, email, subject, phone, message }) => {
    return {
      name: name || "",
      email: email || "",
      phone: phone || "",
      subject: subject || "",
      message: message || "",
    };
  },

  validationSchema: yup.object().shape(validationsForm),

  handleSubmit: (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      // submit to the server
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      };

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/doador`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setSubmitting(false);
          resetForm();
          alert(data.message);
        });
    }, 1000);
  },
})(form);

export default Form;

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
} from '@mui/material';
import { withFormik, FormikProps } from 'formik';
import * as yup from 'yup';
import InputMask from 'react-input-mask';
import { trim, size } from 'lodash';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

import styles from './styles.module.scss';

const createEmailNotification = (type, name) => {
  switch (type) {
    case 'success':
      NotificationManager.success(
        'Assim que possível entrarei em contato com você!',
        `Olá ${name}, recebi o seu email!`
      );
      break;
    case 'error':
      NotificationManager.error(
        'Tente novamente mais tarde ou me contate via whatsapp!',
        `Olá ${name}, infelizmente houve um ao enviar seu email!`
      );
      break;
  }
};

const validationsForm = {
  name: yup.string().required('O nome é obrigatório'),
  email: yup
    .string()
    .email('Informe um email válido')
    .required('O email é obrigatório'),
  phone: yup.string(),
  subject: yup.string().required('O assunto é obrigatório'),
  message: yup.string().required('A mensagem é obrigatória'),
};

// Shape of form values
interface FormValues {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const Form = (props: FormikProps<FormValues>) => {
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

  const [mask, setMask] = useState('(99) 99999-9999');

  return (
    <div className={styles.container}>
      <NotificationContainer />
      <form onSubmit={handleSubmit}>
        <Card className={styles.card}>
          <CardContent>
            <TextField
              id="name"
              label="Nome"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.name ? errors.name : ''}
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
              helperText={touched.email ? errors.email : ''}
              error={touched.email && Boolean(errors.email)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <InputMask
              mask={mask}
              onBlur={(e) => {
                if (size(trim(e.target.value, '_')) === 14) {
                  setMask('(99) 9999-9999');
                }
              }}
              onFocus={(e) => {
                if (size(trim(e.target.value, '_')) === 14) {
                  setMask('(99) 99999-9999');
                }
              }}
              value={values.phone}
              onChange={handleChange}
              disabled={false}
              maskChar={null}
            >
              {() => (
                <TextField
                  id="phone"
                  name="phone"
                  label="Telefone"
                  value={values.phone}
                  helperText={touched.phone ? errors.phone : ''}
                  error={touched.phone && Boolean(errors.phone)}
                  type="text"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                />
              )}
            </InputMask>
            <TextField
              id="subject"
              label="Assunto"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.subject ? errors.subject : ''}
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
              helperText={touched.message ? errors.message : ''}
              error={touched.message && Boolean(errors.message)}
              multiline
              rows={6}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </CardContent>
          <CardActions className={styles.actions}>
            <Button
              type="submit"
              color="primary"
              disabled={isSubmitting}
              variant="contained">
              Enviar
            </Button>
            <Button
              color="error"
              onClick={handleReset}
              variant="contained">
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

const ContactForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: ({ name, email, subject, phone, message }) => {
    return {
      name: name || '',
      email: email || '',
      phone: phone || '',
      subject: subject || '',
      message: message || '',
    };
  },

  validationSchema: yup.object().shape(validationsForm),

  handleSubmit: (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.status === 200) {
        createEmailNotification('success', values.name);
        resetForm();
      } else {
        createEmailNotification('error', values.name);
      }
      
      setSubmitting(false);
    });
  },
})(Form);

export default ContactForm;
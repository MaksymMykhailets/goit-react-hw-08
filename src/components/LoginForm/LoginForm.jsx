import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(logIn(values));
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <Field
            name="email"
            type="email"
            id="email"
            className={styles.input}
          />
          <ErrorMessage name="email" component="div" className={styles.error} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <Field
            name="password"
            type="password"
            id="password"
            className={styles.input}
          />
          <ErrorMessage
            name="password"
            component="div"
            className={styles.error}
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Минимум 2 символа в поле Фамилия')
    .max(30, 'Максимум 30 символов в поле Фамилия')
    .required('Заполните поле Фамилия'),
  lastName: Yup.string()
    .min(2, 'Минимум 2 символа в поле Имя')
    .max(30, 'Максимум 30 символов в поле Имя')
    .required('Заполните поле Имя'),
  patronymic: Yup.string()
    .min(2, 'Минимум 2 символа в поле Отчество')
    .max(30, 'Максимум 30 символов в поле Отчество'),
  number: Yup.number()
    .min(11, 'Номер имеет минимум 11 цифр ')
    .required('Заполните поле Номер телефона')
    .typeError('Поле Номер телефона должно содержать только цифры'),
  birthDate: Yup.string()
    .min(10, 'Проверьте формат MM.DD.YYYY')
    .required('Заполните поле Дата рождения')
});

export const ContactsForm = () => {
  return (
    <section className='contacts'>
      <p className='title'>Контактные данные</p>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          patronymic: '',
          number: '',
          birthDate: ''
        }}
        validationSchema={SignupSchema}
        validateOnChange
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              className={touched && errors.firstName ? 'input large invalid' : 'input large'}
              name='firstName'
              placeholder='Фамилия'
            />
            <Field
              className={touched && errors.lastName ? 'input medium invalid' : 'input medium'}
              name='lastName'
              placeholder='Имя'
            />
            <Field
              className={touched && errors.patronymic ? 'input medium invalid' : 'input medium'}
              name='patronymic'
              placeholder='Отчество'
            />
            <br />
            <Field
              className={touched && errors.number ? 'input large invalid' : 'input large'}
              name='number'
              placeholder='Номер телефона'
            />{' '}
            <Field
              className={touched && errors.birthDate ? 'input medium invalid' : 'input medium'}
              name='birthDate'
              placeholder='Дата рождения'
            />
            <ErrorMessage className='error' component='div' name='firstName' />
            <ErrorMessage className='error' component='div' name='lastName' />
            <ErrorMessage className='error' component='div' name='patronymic' />
            <ErrorMessage className='error' component='div' name='number' />
            <ErrorMessage className='error' component='div' name='birthDate' />
          </Form>
        )}
      </Formik>
    </section>
  );
};

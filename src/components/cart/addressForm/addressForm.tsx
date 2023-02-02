import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  city: Yup.string()
    .min(2, 'Минимум 2 символа в поле Город')
    .max(50, 'Максимум 50 символов в поле Город')
    .required('Заполните поле Город'),
  street: Yup.string()
    .min(2, 'Минимум 2 символа в поле Улица')
    .max(60, 'Максимум 60 символов в поле Улица')
    .required('Заполните поле Улица'),
  house: Yup.number()
    .min(1, 'Минимум 2 символа в поле Дом')
    .max(10, 'Максимум 30 символов в поле Дом')
    .required('Заполните поле Дом')
    .typeError('Поле Дом должно содержать число'),
  houseNumber: Yup.number()
    .min(1, 'Минимум 2 символа в поле Квартира')
    .max(10, 'Максимум 30 символов в поле Квартира')
    .required('Заполните поле Квартира')
    .typeError('Поле Квартира должно содержать число')
});

export const AddressForm = () => {
  return (
    <section className='contacts'>
      <p className='title'>Адрес доставки</p>
      <Formik
        initialValues={{
          city: '',
          street: '',
          house: '',
          houseNumber: ''
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
              className={touched && errors.city ? 'input large invalid' : 'input large'}
              name='city'
              placeholder='Город'
            />
            <Field
              className={touched && errors.street ? 'input medium invalid' : 'input medium'}
              name='street'
              placeholder='Улица'
            />
            <Field
              className={touched && errors.house ? 'input smallest invalid' : 'input medium'}
              name='house'
              placeholder='Дом'
            />
            <Field
              className={touched && errors.houseNumber ? 'input small invalid' : 'input large'}
              name='houseNumber'
              placeholder='Квартира'
            />

            <ErrorMessage className='error' component='div' name='city' />
            <ErrorMessage className='error' component='div' name='street' />
            <ErrorMessage className='error' component='div' name='house' />
            <ErrorMessage className='error' component='div' name='houseNumber' />
          </Form>
        )}
      </Formik>
      <textarea className='input textarea' placeholder='Заметки для курьера' />
    </section>
  );
};

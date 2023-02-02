export const ContactsForm = () => {
  return (
    <section className='contacts'>
      <p className='title'>Контактные данные</p>

      <div className='inputs'>
        <input className='input large' type='text' name='surname' placeholder='Фамилия' />
        <input className='input medium' type='text' name='name' placeholder='Имя' />
        <input className='input medium' type='text' name='lastname' placeholder='Отчество' />
      </div>
      <>
        <input className='input large' type='text' name='number' placeholder='Номер телефона' />
        <input className='input medium' type='text' name='birthdate' placeholder='Дата рождения' />
      </>
    </section>
  );
};

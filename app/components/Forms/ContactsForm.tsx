import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import MainBtn from '../Buttons/MainBtn';

type Inputs = {
  name: string;
  phone: string;
  mail: string;
  comment: string;
};

const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register('name')} />
      {errors.name && <span>This field is required</span>}

      <input {...register('phone', { required: true })} />
      {errors.phone && <span>This field is required</span>}
      <input {...register('mail', { required: true })} />
      {errors.mail && <span>This field is required</span>}
      <input {...register('comment')} type="textarea" />

      <MainBtn type="submit" text="Відправити" />
    </form>
  );
};

export default ContactsForm;

'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import MainBtn from '../Buttons/MainBtn';
import FormSubmitBtn from '../Buttons/FormSubmitBtn';
import telegramBotService from '@/services/telegramBot.service';
import toast from 'react-hot-toast';

type Inputs = {
  name: string;
  phone: string;
  email: string;
  comment: string;
};

const ContactsForm = () => {
  const [isNameActive, setIsNameActive] = useState<boolean>(false);
  const [isPhoneActive, setIsPhoneActive] = useState<boolean>(false);
  const [isMailActive, setIsMailActive] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await telegramBotService.sendMessage(data);
    if (res.ok) {
      toast.success("Ваша заявка прийнята! З вами зв'яжеться перший вільний оператор.");
    } else {
      toast.error('Вибачте, сталася помилка (((. Спробуйте ще раз');
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 md:w-[512px] lg:w-[512px]">
      <div
        className="flex flex-col relative"
        onFocus={() => setIsNameActive(true)}
        onBlur={() => setIsNameActive(false)}
      >
        <label htmlFor="name" className={`formLabel transition-all ${(isNameActive || name !== '') && 'activeLabel'}`}>
          Ім’я *
        </label>
        <input
          id="name"
          {...register('name', { required: "Обов'язкове поле", onChange: (e) => setName(e.currentTarget.value) })}
          className="bg-transparent formInput font-montserrat hover:border-[#DD6A00]"
        />
        {errors.name && <span className="imputEfrror">{errors.name.message}</span>}
      </div>
      <div
        className="flex flex-col relative"
        onFocus={() => setIsPhoneActive(true)}
        onBlur={() => setIsPhoneActive(false)}
      >
        <label
          htmlFor="phone"
          className={`formLabel transition-all ${(isPhoneActive || phone !== '') && 'activeLabel'}`}
        >
          Телефон *
        </label>
        <input
          id="phone"
          {...register('phone', {
            required: "Обов'язкове поле",
            onChange: (e) => setPhone(e.currentTarget.value),
            pattern: {
              value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              message: 'Невірний формат номера',
            },
          })}
          className="bg-transparent formInput font-montserrat hover:border-[#DD6A00]"
        />
        {errors.phone && <span className="imputEfrror">{errors.phone.message}</span>}
      </div>
      <div
        className="flex flex-col relative"
        onFocus={() => setIsMailActive(true)}
        onBlur={() => setIsMailActive(false)}
      >
        <label
          htmlFor="email"
          className={`formLabel transition-all ${(isMailActive || email !== '') && 'activeLabel'}`}
        >
          E-mail *
        </label>
        <input
          id="mail"
          {...register('email', {
            required: "Oбов'язкове поле",
            onChange: (e) => setEmail(e.currentTarget.value),
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Введіть дійсниу ел адресу',
            },
          })}
          className="bg-transparent formInput font-montserrat hover:border-[#DD6A00]"
        />
        {errors.email && <span className="imputEfrror">{errors.email.message}</span>}
      </div>
      <div className="flex flex-col ">
        <label htmlFor="comment" className="font-montserrat text-white">
          Коментар
        </label>
        <textarea
          id="comment"
          rows={5}
          {...register('comment')}
          className="bg-transparent font-montserrat rounded border border-white  text-white outline-none p-1 hover:border-[#DD6A00]"
        />
      </div>

      <FormSubmitBtn />
    </form>
  );
};

export default ContactsForm;

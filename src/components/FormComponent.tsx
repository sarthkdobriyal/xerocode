'use client'

import { FC, useState } from 'react'
import { z } from 'zod'
import {set, useForm} from 'react-hook-form'
import { FormData , FormValidator } from '@/validations/formValidations'
import { zodResolver } from '@hookform/resolvers/zod'
import { m } from 'framer-motion'
import { itemScale, itemSlide } from '@/variants/textVariants'
import LazyMotionComponent from './LazyMotionComponent'

interface FormComponentProps {
  
}

const FormComponent: FC<FormComponentProps> = ({}) => {
    const [showSuccess, setShowSuccess] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const {
    register, handleSubmit, reset, setError, formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(FormValidator)
  })

  const onSubmit = handleSubmit(async (formData: FormData) => {
    try{
        setLoading(true)
        const response = await fetch('api/waitlist/new', {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        if(response.status === 200){
            setShowSuccess(true)
        }

    }catch(e){
        console.log(e)
    }finally{
        setLoading(false);
        reset()
    }
  })

  return <form onSubmit={onSubmit} className='w-[30%] flex flex-col gap-2'>
    <LazyMotionComponent>
      
      
  {showSuccess && <p className='m-3 text-lg  text-green-400 font-bold animate-bounce duration-700 tracking-widest' >Form has been submitted</p>}

    <m.input variants={itemScale} initial='hidden' whileInView='visible' type="text"  {...register('name')} className='input'  placeholder='Enter your name'/>
    <p className='m-2 tracking-wide text-base  font-semibold text-red-800'>{errors.name?.message}</p>
    <m.input variants={itemScale} initial='hidden' whileInView='visible' type="email" {...register('email')} className='input'  placeholder='Enter your email'/>
    <p className='m-2 tracking-wide text-base  font-semibold text-red-800'>{errors.email?.message}</p>
    <m.input variants={itemScale} initial='hidden' whileInView='visible' type="number" {...register('phone')}  className='input'  placeholder='Enter your phone number'/>
    <p className='m-2 tracking-wide text-base  font-semibold text-red-800'>{errors.phone?.message}</p>
    <m.input variants={itemScale} initial='hidden' whileInView='visible' type="text" {...register('city')} className='input'  placeholder='Enter your city'/>
    <p className='m-2 tracking-wide text-base  font-semibold text-red-800'>{errors.city?.message}</p>
    <m.button variants={itemSlide} initial='hidden' whileInView='visible' className=' mx-auto border rounded-full bg-[#5c24ff] px-4 py-2 text-xl hover:bg-[#3a19a7] active:translate-y-2 transition-all duration-75 '>Submit</m.button>
    </LazyMotionComponent>
    </form>
}

export default FormComponent
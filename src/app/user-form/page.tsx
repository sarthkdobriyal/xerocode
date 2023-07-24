'use client'

import { FC, useState } from 'react'

import FormComponent from '../../components/FormComponent'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {


  return <div className='w-full flex-col flex justify-center items-center my-5 gap-12'>
    <div className='text-2xl font-bold font-open purple_gradient bg-clip-text text-transparent'>Enter Your details here </div>
    <FormComponent />
    

  </div>
}

export default page
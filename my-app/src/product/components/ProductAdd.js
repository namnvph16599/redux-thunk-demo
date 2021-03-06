import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const ProductsAdd = (props) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onsubmit = (dataPost) => {
    props.pushDataAdd(dataPost);
    navigate('/products')
  }
  return (
    <div id="Products-Add">
      <form onSubmit={handleSubmit(onsubmit)}>
        <input {...register('name')} type='text'  placeholder='name' /><br />
        <input {...register('image')} type='text'  placeholder='image' /><br />
        <input {...register('price')} type='number'  placeholder='price' /><br />
        <input {...register('desc')} type='text'  placeholder='desc' /><br />
        <button>Add</button>
      </form>
    </div>
  )
};

export default ProductsAdd;
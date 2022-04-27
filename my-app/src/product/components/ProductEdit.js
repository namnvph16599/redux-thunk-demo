import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { getById } from '../../api/products';

const ProductsEdit = (props) => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await getById(id);
      reset(data);
    };
    getProducts();
  }, []);
  const onsubmit = (dataEdit) => {
    props.pushDataEdit(dataEdit);
  };
  return (
    <div id='Products-Add'>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input {...register('name')} type='text' placeholder='name' />
        <br />
        <input {...register('image')} type='text' placeholder='image' />
        <br />
        <input {...register('price')} type='number' placeholder='price' />
        <br />
        <input {...register('desc')} type='text' placeholder='desc' />
        <br />
        <button>edit</button>
      </form>
    </div>
  );
};

export default ProductsEdit;

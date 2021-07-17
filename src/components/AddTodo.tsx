import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';

const schema = yup.object().shape({
  title: yup.string().required('Preencha o campo "Tarefa"'),
});

interface AddTodoForm {
  title: string;
}

const AddTodo = () => {
  const { addTodo } = useContext<TodoContextType>(TodoContext);

  const { register, handleSubmit, setError, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: AddTodoForm, e: any) => {
    addTodo(data.title);
    e.target.reset();
    window.location.href = '/';
  }

  return (
    <form onSubmit={handleSubmit<AddTodoForm>(onSubmit)}>
      <h4>Nova Tarefa</h4>
      <div className="uk-margin uk-width-1-1">
        <input type="text" id="title" placeholder="Tarefa" className="uk-input" {...register('title')} />
        {errors.title && <span><small><strong className="uk-text-danger">{errors.title?.message}</strong></small></span>}
      </div>
      <div className="uk-width-1-1">
        <button type="submit" className="uk-button uk-button-primary">Adicionar</button>
      </div>
    </form>
  );
};

export default AddTodo;
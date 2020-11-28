import React from 'react';
import BaseForm from '../../BaseForm';
import { useForm } from 'react-hook-form';
import { makePrivateRequest } from 'core/utils/request';
import './styles.scss';

type FormState = {
    name: string;
    price: string;
    description: string;
    imageUrl: string;
}

const Form = () => {
    const {register, handleSubmit, errors } = useForm<FormState>();

    const onSubmit = (data: FormState) => {
        makePrivateRequest({ url: '/products', method: 'POST', data });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseForm title="cadastrar um produto">
                <div className="row">
                    <div className="col-6">
                        <div className="margin-botton-30">
                            <input
                                ref={register({ required: "Campo obrigatório" })}
                                name="name"
                                type="text"
                                className="form-control input-base"
                                placeholder="Nome do produto"
                            />
                            {errors.name && (
                                <div className="invalid-feedback d-block">
                                    {errors.name.message}
                                </div>
                    )}
                        </div>
                        <input
                            ref={register({ required: "Campo obrigatório" })}
                            name="price"
                            type="number"
                            className="form-control  input-base margin-bottom-30"
                            placeholder="Preço"
                        />
                        <input
                            ref={register({ required: "Campo obrigatório" })}
                            name="imageUrl"
                            type="text"
                            className="form-control margin-bottom-30 input-base"
                            placeholder="Imagem do produto"
                        />
                    </div>
                    <div className="col-6">
                        <textarea
                            ref={register({ required: "Campo obrigatório" })}
                            name="description"
                            className="form-control input-base"
                            placeholder="Descrição"
                            cols={30}
                            rows={10}
                        />
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}

export default Form;
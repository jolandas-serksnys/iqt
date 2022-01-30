import { Breadcrumb, Form, Button, Toast } from '@douyinfe/semi-ui';
import React from 'react';
import PostService from '../services/PostService';

export const PostCreate: React.FC = () => {
    const handleSubmit = (formValues: any) => {
        PostService.create(formValues)
        .then((response: any) => {
            Toast.info('Post has been succesfully created');
        })
        .catch((e: Error) => {
            Toast.error(e.message);
        });
    };

    return (
        <>
        <Breadcrumb
            routes={[{
                name: 'Posts list'
            }, {
                name: 'Create a Post'
            }]}

            className='breadcrumbs'
        />
        <div className='page'>
            <Form onSubmit={handleSubmit} style={{width: 600}}>
                {({formState, values, formApi}) => (
                    <>
                        <Form.Input field='title' label='Title' style={{ width: '100%' }} placeholder='Enter title' required/>
                        <Form.TextArea field='body' label='Body' style={{ width: '100%' }} placeholder='Enter body' required/>
                        <Button size='large' theme='solid' type='primary' htmlType='submit' style={{ marginRight:8 }}>Submit</Button>
                    </>
                )}
            </Form>
        </div>
        </>
    )
}
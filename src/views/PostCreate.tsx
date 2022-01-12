import { Layout, Breadcrumb, Form, Button, Toast } from '@douyinfe/semi-ui';
import React from 'react';
import PostService from '../services/PostService';
import { NavBar } from "../components/NavBar"

export const PostCreate: React.FC = () => {
    const handleSubmit = (formValues: any) => {
        PostService.create(formValues)
        .then((response: any) => {
            //setPosts(response.data);
            console.log(response.data);
            Toast.info('Post has been succesfully created');
        })
        .catch((e: Error) => {
            console.log(e);
            Toast.error('An error has occured');
        })
        
    };

    return (
        <Layout>
            <NavBar/>
            <Layout.Content
                style={{
                    padding: '24px',
                    backgroundColor: 'var(--semi-color-bg-0)'
                }}>
                    <Breadcrumb
                        style={{
                            marginBottom: '24px'
                        }}
                        routes={[{
                            href: '/',
                            name: 'Posts list'
                        }, {
                            name: 'Create a Post'
                        }]}
                    />
                    <div style={{
                       display: 'flex',
                       justifyContent: 'center'
                    }}>
                        <Form onSubmit={values => handleSubmit(values)} style={{width: 600}}>
                            {({formState, values, formApi}) => (
                                <>
                                    <Form.InputNumber field='userId' label='User ID' style={{ width: '100%' }} placeholder='User ID' min={1} required/>
                                    <Form.Input field='title' label='Title' style={{ width: '100%' }} placeholder='Enter title' required/>
                                    <Form.TextArea field='body' label='Body' style={{ width: '100%' }} placeholder='Enter body' required/>
                                    <Button size='large' theme='solid' type='primary' htmlType='submit' style={{ marginRight:8 }}>Submit</Button>
                                </>
                            )}
                        </Form>
                   </div>
                </Layout.Content>
        </Layout>
    )
}
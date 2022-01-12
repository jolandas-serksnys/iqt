import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostService from '../services/PostService';
import IPost from '../types/IPost';
import { NavBar } from "../components/NavBar"
import { Avatar, Breadcrumb, Card, Layout, Toast } from '@douyinfe/semi-ui';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import Title from '@douyinfe/semi-ui/lib/es/typography/title';

export const PostView: React.FC = (props) => {
    const [post, setPost] = useState<IPost>();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const getPost = (id: any) => {
            PostService.get(id)
            .then((response: any) => {
                setPost(response.data);
            })
            .catch((e: Error) => {
                Toast.error('An error has occured trying to load the post.');
                navigate('/');
            });
        }

        getPost(params.id);
    }, [params, navigate]);

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
                        name: post?.title
                    }]} />
                    <Card
                        header={
                            <>
                                <Title>{post?.title}</Title>
                                <Card.Meta 
                                    title={'User #' + post?.userId}
                                    avatar={
                                        <Avatar size='extra-extra-small'>{post?.userId}</Avatar>
                                    }
                                    style={{
                                        marginTop: 12
                                    }}
                                />
                            </>
                        }
                    >
                        <Text>{post?.body}</Text>
                    </Card>
                </Layout.Content>
        </Layout>
    )
}
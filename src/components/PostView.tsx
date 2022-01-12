import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../services/PostService';
import IPost from '../types/IPost';
import { NavBar } from "./NavBar"
import { Avatar, Breadcrumb, Card, Layout } from '@douyinfe/semi-ui';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';

export const PostView: React.FC = (props) => {
    const [post, setPost] = useState<IPost>();
    const params = useParams();

    const getPost = (id: any) => {
        PostService.get(id)
        .then((response: any) => {
            setPost(response.data);
            console.log(response.data);
        })
        .catch((e: Error) => {
            console.log(e);
        })
    }

    useEffect(() => {
        getPost(params.id);
    }, []);

    return (
        <Layout>
            <NavBar></NavBar>
            <Layout.Content
                style={{
                    padding: '24px',
                    backgroundColor: 'var(--semi-color-bg-0)'
                }}>
                <Breadcrumb
                    style={{
                        marginBottom: '24px'
                    }}
                    routes={['Posts list', '' + post?.title]} />
                    <Card
                        headerLine={ false }
                        cover={
                            <div style={{
                                backgroundImage: 'url("https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: 300
                            }}></div>
                        }
                        header={
                            <Card.Meta 
                                title={post?.title} 
                            />
                        }
                    >
                        <Card.Meta 
                            title="Semi Doc" 
                            avatar={
                                <Avatar>{post?.userId}</Avatar>
                            }
                            style={{
                                marginBottom: 12
                            }}
                        />
                        <Text>{post?.body}</Text>
                    </Card>
                </Layout.Content>
        </Layout>
    )
}
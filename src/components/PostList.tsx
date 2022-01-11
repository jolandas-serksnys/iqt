import React, { useEffect, useState } from 'react';
import PostService from '../services/PostService';
import IPost from '../types/IPost';
import { NavBar } from "./NavBar"
import { Avatar, Card, Layout, List } from '@douyinfe/semi-ui';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import { useNavigate } from 'react-router-dom';
//import { Button, Toast } from '@douyinfe/semi-ui';

export const PostList: React.FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const navigate = useNavigate();

    const getPosts = () => {
        PostService.getAll()
        .then((response: any) => {
            setPosts(response.data);
            console.log(response.data);
        })
        .catch((e: Error) => {
            console.log(e);
        })
    }

    useEffect(() => {
        getPosts();
    }, []);

    //getPosts();

    return (
        <Layout>
            <NavBar></NavBar>
            <Layout.Content
                style={{
                    padding: '24px',
                    backgroundColor: 'var(--semi-color-bg-0)'
                }}>

            <List 
                grid={{
                    gutter: 12,
                    xs: 0,
                    sm: 0,
                    md: 12,
                    lg: 8,
                    xl: 8,
                    xxl: 6,
                }}
                
                dataSource={posts}
                renderItem={post => (
                    <List.Item>
                        <Card 
                            title={
                                <Card.Meta
                                    title={post.title}
                                    avatar={
                                        <Avatar>{post.userId}</Avatar>
                                    }
                                />
                            }
                            headerExtraContent={
                                <Text link onClick={() => navigate('/post/' + post.id)}>
                                    More
                                </Text>
                            }
                            style={{marginBottom: 12}}
                        >
                            <Text>{post.body}</Text>
                        </Card>
                    </List.Item>
                )}
            />
            </Layout.Content>
        </Layout>
      )
}
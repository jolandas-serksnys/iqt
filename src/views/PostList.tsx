import React, { useEffect, useState } from 'react';
import PostService from '../services/PostService';
import IPost from '../types/IPost';
import { NavBar } from "../components/NavBar"
import { Avatar, Breadcrumb, Card, Input, Layout, List } from '@douyinfe/semi-ui';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import { useNavigate } from 'react-router-dom';
import { IconSearch } from '@douyinfe/semi-icons';
//import { Button, Toast } from '@douyinfe/semi-ui';

export const PostList: React.FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
    const navigate = useNavigate();

    const getPosts = () => {
        PostService.getAll()
        .then((response: any) => {
            setPosts(response.data);
            setFilteredPosts(response.data);
        })
        .catch((e: Error) => {
            console.log(e);
        });
    }

    const searchPosts = (caller: any) => {
        setFilteredPosts(posts.filter(post => post.title.toLocaleLowerCase().includes(caller.target.value.toLowerCase())));
    }

    useEffect(() => {
        getPosts();
    }, []);

    //getPosts();

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
                    }]} 
                />
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: 12
                }}>
                    <Input suffix={<IconSearch />} placeholder='Search' size='large' type='search' style={{width: 480}} onInput={value => searchPosts(value)}/>
                </div>
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
                    
                    dataSource={filteredPosts}
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
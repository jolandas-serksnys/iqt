import React, { useEffect, useState } from 'react';
import PostService from '../services/PostService';
import IPost from '../types/IPost';
import { Avatar, Breadcrumb, Card, Input, List } from '@douyinfe/semi-ui';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import { useNavigate } from 'react-router-dom';
import { IconSearch } from '@douyinfe/semi-icons';

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

    return (
        <>
        <Breadcrumb
            routes={[{
                name: 'Posts list'
            }]} 

            className='breadcrumbs'
        />
        <div className='search-container'>
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
        </>
      )
}
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostService from '../services/PostService';
import IPost from '../types/IPost';
import { Avatar, Breadcrumb, Card, Toast } from '@douyinfe/semi-ui';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import Title from '@douyinfe/semi-ui/lib/es/typography/title';

export const PostView: React.FC = (props) => {
    const [post, setPost] = useState<IPost>();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getPost = (id: number) => {
            PostService.get(id)
            .then((response: any) => {
                setPost(response.data);
            })
            .catch((e: Error) => {
                Toast.error(e.message);
                navigate('/');
            });
        }

        let id = params.id as unknown as number;
        if(id) {
            getPost(id);
        }
    }, [params, navigate]);

    return (
        <>
        <Breadcrumb
            routes={[{
                name: 'Posts list'
            }, {
                name: post?.title
            }]}

            className='breadcrumbs' />
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
        </>
    )
}
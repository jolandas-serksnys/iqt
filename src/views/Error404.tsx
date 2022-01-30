import { Layout, Breadcrumb, Card, Avatar } from '@douyinfe/semi-ui';
import React from 'react';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import { IconAlertCircle } from '@douyinfe/semi-icons';

export const Error404: React.FC = () => {
    return (
        <>
        <Breadcrumb
            routes={[{
                name: 'Posts list'
            }, {
                name: 'Not found'
            }]}
        />
        <div className='page'>
            <Card 
                bordered={false}
                className='error-card'
            >
                <Card.Meta
                    title={
                        <>
                            <div>Page not found</div>
                            <Text>It appears you got lost?</Text>
                        </>
                    }
                    avatar={
                        <Avatar>
                            <IconAlertCircle size='extra-large' />
                        </Avatar>
                    }
                />
            </Card>
        </div>
        </>
    )
}
import { Layout, Breadcrumb, Card, Avatar } from '@douyinfe/semi-ui';
import React from 'react';
import { NavBar } from "../components/NavBar"
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import { IconAlertCircle } from '@douyinfe/semi-icons';

export const Error404: React.FC = () => {
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
                            name: 'Not found'
                        }]}
                    />
                    <div style={{
                       display: 'flex',
                       justifyContent: 'center'
                    }}>
                        <Card 
                            bordered={false}
                            bodyStyle={{ 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
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
                </Layout.Content>
        </Layout>
    )
}
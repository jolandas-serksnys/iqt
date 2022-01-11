import React from 'react';
import { Nav } from '@douyinfe/semi-ui';
import { IconList, IconEdit } from '@douyinfe/semi-icons';
import { useNavigate } from 'react-router-dom';

export function NavBar() {
    const navigate = useNavigate();
    return (
        <div style={{ width: '100%' }}>
            <Nav
                mode={'horizontal'}
                items={[
                    { itemKey: 'list', text: 'All Posts', icon: <IconList /> },
                    { itemKey: 'create', text: 'Create a Post', icon: <IconEdit /> },
                ]}
                onSelect={key => {
                    navigate('/' + key.itemKey);
                }}
                header={{
                    text: 'Internship Posts'
                }}
            />
        </div>
    );
}
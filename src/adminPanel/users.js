import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'react-admin';

export const UserList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <TextField source="user_id" />
            <TextField source="user_firstname" />
            <TextField source="username" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);
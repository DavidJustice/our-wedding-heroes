/* @flow */

import React from 'react';
import { Paper, Toolbar, ToolbarGroup, ToolbarTitle, IconButton } from 'material-ui';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ActiveUserList from './ActiveUserList';
import InvitedUserList from './InvitedUserList';

type PropsType = {
    activeUsers: Array<{
        _id: string,
        name: string,
        email: string,
    }>,
    invitedUsers: Array<{
        _id: string,
        email: string,
    }>,
    loggedInUser: {
        email: string,
    },
    onAdd: Function,
    onDelete: Function,
};

export default function UserList({ activeUsers, invitedUsers, loggedInUser, onAdd, onDelete }: PropsType) {
    return (
        <Paper>
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle text="Users" />
                </ToolbarGroup>

                <ToolbarGroup>
                    <IconButton touch onClick={onAdd}>
                        <PersonAdd />
                    </IconButton>
                </ToolbarGroup>
            </Toolbar>

            <InvitedUserList
                users={invitedUsers}
                onDelete={onDelete}
            />

            <ActiveUserList
                users={activeUsers}
                loggedInUser={loggedInUser}
                onDelete={onDelete}
            />
        </Paper>
    );
}

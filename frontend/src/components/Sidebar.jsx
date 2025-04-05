import React, { useEffect } from 'react'
import { userChatStore } from '../store/useChatStore'

const Sidebar = () => {

    const {getUsers, users, selectedUser, setSelectedUser, isUsersLoading} = userChatStore();

    const onlineUsers = [];

    useEffect(() => {
        getUsers()
    }, [getUsers])

    if(isUsersLoading) return <SidebarSkeleton />

  return (
    <div>Sidebar</div>
  )
}

export default Sidebar
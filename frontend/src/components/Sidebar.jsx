import React, { useEffect } from 'react'
import { userChatStore } from '../store/useChatStore'
import SidebarSkeleton from "./skeletons/SidebarSkeleton";

const Sidebar = () => {

    const {getUsers, users, selectedUser, setSelectedUser, isUsersLoading} = userChatStore();

    const onlineUsers = [];

    useEffect(() => {
        getUsers()
    }, [getUsers])

    if(isUsersLoading) return <SidebarSkeleton />

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">

    </aside>
  )
}

export default Sidebar
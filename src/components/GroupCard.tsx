import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { UsersIcon } from "@heroicons/react/outline";
import { usePutApiGroupsIdUser } from "../service/default";
import Link from "next/link";

type GroupCardProps = {
    name: string,
    desc: string,
    id: string
}

export const GroupCard = (props: GroupCardProps) => {
    const { name, desc, id } = props;
    const [addUser, setAddUser] = useState(false);
    const { mutate } = usePutApiGroupsIdUser();

    useEffect(() => {
        if (addUser) setAddUser(false);
    })

    const [{ isOver }, dropRef] = useDrop({
        accept: 'user',
        drop: (item: { id: string }) => {
            let user = item.id;
            mutate({ id, user }); // adds user to group
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })
    
    return (
        <Link href={{
            pathname: '/groups/[id]',
            query: { id }
        }}>
            { !isOver ?
                <article tw="shadow-md bg-white dark:bg-card rounded-md text-mono-800 dark:text-lightGrey p-4 flex flex-col hover:cursor-pointer items-center gap-1" className='basket' ref={dropRef}>
                    <UsersIcon tw="w-16 h-16 p-0.5 border-4 border-mono-400 dark:border-tanGrey rounded-full my-4" />
                    <header tw="text-lg font-bold">{name}</header>
                    <div tw="text-sm text-mono-500 dark:text-lightGrey">{desc}</div>
                </article>
            :
                <article tw="shadow-md bg-white dark:bg-card rounded-md text-mono-800 dark:text-lightGrey p-4 flex flex-col hover:cursor-pointer items-center gap-1 border-2 border-yellow-500" className='basket' ref={dropRef}>
                    <UsersIcon tw="w-16 h-16 p-0.5 border-4 border-mono-400 dark:border-tanGrey rounded-full my-4" />
                    <header tw="text-lg font-bold">{name}</header>
                    <div tw="text-sm text-mono-500 dark:text-lightGrey">{desc}</div>
                    <div tw="text-sm font-bold text-yellow-500">Add</div>
                </article>
            }
        </Link>
    )
};

import { useDrag } from 'react-dnd'
import { UserIcon } from "@heroicons/react/outline";
import Link from "next/link";

type UserCardProps = {
    id: string
}

export const UserCard = (props: UserCardProps) => {
    const { id } = props;
    
    const [{ isDragging }, dragRef] = useDrag({
        type: 'user',
        item: { id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    return (
        <Link href={{
        pathname: '/users/[id]',
        query: { id }
        }}>
            { !isDragging ? 
                <div tw="shadow-md bg-white dark:bg-card rounded-md text-mono-800 dark:text-lightGrey p-8 flex flex-col items-center hover:cursor-pointer gap-2 text-lg" className='user-card' ref={dragRef}>
                    <UserIcon tw="w-8 h-8" />
                    {id}
                </div> 
            :
                <div tw="shadow-md bg-white dark:bg-card rounded-md text-mono-800 dark:text-lightGrey p-8 flex flex-col items-center hover:cursor-pointer gap-2 text-lg border-2 border-yellow-500" className='user-card' ref={dragRef}>
                    <UserIcon tw="w-8 h-8" />
                    {id}
                </div>
            }
        </Link>
    )
};
import { useRouter } from 'next/router';
import { useState } from 'react';
import type { NextPage } from "next";
import Head from "next/head";
import { useRef, useEffect } from "react";
import { Footer } from "../../components/Footer";
import { useGetApiGroupsId, useDeleteApiGroupsIdUser, useGetApiGroupsIdUsers } from "../../service/default";
import { UsersIcon, UserIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useQueryClient } from 'react-query';

const GroupPage: NextPage = () => {
    const content = useRef();
    const router = useRouter();
    const queryClient = useQueryClient();
    const { id } = router.query as { id: string };
    const { data: users } = useGetApiGroupsIdUsers(`${id}`);
    const { data: group } = useGetApiGroupsId(`${id}`);
    const [edit, setEdit] = useState(false)

    const options = {
        mutation: {
            onSuccess: async () => {
                queryClient.invalidateQueries();
            },
            onError: async (err: string) => {
                console.log(err);
            },
        }
    }

    const { mutate: removeUser } = useDeleteApiGroupsIdUser(options);

    const toggleEdit = () => {
        setEdit(!edit);
    }

    const handleRemove = (id:string, user:string) => {
        removeUser({ id, user });
    }


    return (
        <div tw="dark:bg-mono-900 bg-blue-500 dark:text-white min-h-screen flex flex-col">
            <Head>
            <title>User Groups - {id}</title>
            <meta name="description" content="user details page" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
            <div tw="max-w-2xl mx-auto p-8 flex items-center">
                <Link href="/" passHref={true}>
                <a tw="font-extrabold text-2xl text-white dark:text-yellow-500">User Groups</a>
                </Link>
                <Link href="/swagger" passHref={true}>
                <a tw="ml-auto dark:text-mono-300 text-mono-100 underline">
                    api docs
                </a>
                </Link>
            </div>
            </header>
                <main tw="flex flex-col items-center justify-center flex-1" ref={content}>
                    <section tw="bg-mono-50 dark:bg-mono-800 w-full flex justify-center">
                        <div tw="grid max-w-4xl gap-8 p-8 sm:grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] w-full">
                        <h2 tw="sm:col-span-2 md:col-span-3 text-2xl font-bold">Group</h2>
                            <>
                                <article tw="shadow-md bg-white dark:bg-card rounded-md text-mono-800 dark:text-lightGrey p-4 flex flex-col items-center gap-1">
                                    <UsersIcon tw="w-16 h-16 p-0.5 border-4 border-mono-400 dark:border-tanGrey rounded-full my-4" />
                                        <header tw="text-lg font-bold">{group?.group?.name}</header>
                                    <div tw="text-sm text-mono-500 dark:text-lightGrey "></div>
                                </article>
                            </>
                        </div>
                    </section>                
                    <section tw="bg-mono-100 dark:bg-mono-700 w-full flex justify-center items-start flex-1">
                        <div tw="grid max-w-4xl gap-8 p-8 grid-cols-[repeat(2,1fr)] sm:grid-cols-[repeat(3,1fr)] md:grid-cols-[repeat(5,1fr)] w-full">
                            <span tw="col-span-2 sm:col-span-3 md:col-span-5 flex justify-between">
                                <h2 tw="text-2xl font-bold">Associated Users</h2>
                                { edit && <button onClick={toggleEdit} tw="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">done</button> }
                                { !edit && <button onClick={toggleEdit} tw="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">edit</button> }
                            </span>
                            {users?.users.map((user:string) => {console.log(user); return (
                                    <>
                                        { !edit && <Link href={{
                                            pathname: '/users/[id]',
                                            query: { id: user }
                                            }}>
                                                <div tw="shadow-md bg-white dark:bg-card rounded-md text-mono-800 dark:text-lightGrey p-8 flex flex-col hover:cursor-pointer items-center gap-2 text-lg">
                                                    <UserIcon tw="w-8 h-8" />
                                                    {user}
                                                </div>
                                            </Link>
                                        }
                                        { edit && 
                                            <div tw="shadow-md bg-white dark:bg-card rounded-md text-mono-800 dark:text-lightGrey p-8 flex flex-col items-center gap-2 text-lg">
                                                <UserIcon tw="w-8 h-8" />
                                                {user}
                                                <button onClick={() => handleRemove(group?.group.uuid, user)} tw="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">remove</button>
                                            </div>
                                        }
                                    </>
                                )}
                            )}
                        </div>
                    </section>
                </main>

            <Footer />
        </div>
    );
};

export default GroupPage;

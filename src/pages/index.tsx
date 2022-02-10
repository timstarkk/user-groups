import type { NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import { Footer } from "../components/Footer";
import { useGetApiGroups, useGetApiUsers, useGetApiUsersId } from "../service/default";
import { UsersIcon, UserIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Home: NextPage = () => {
  const content = useRef();

  const { data: groups } = useGetApiGroups();
  const { data: users } = useGetApiUsers();
  const { data: user } = useGetApiUsersId();

  return (
    <div tw="dark:bg-mono-900 bg-blue-500 dark:text-white min-h-screen flex flex-col">
      <Head>
        <title>User Groups</title>
        <meta name="description" content="Generated by create next app" />
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
            <h2 tw="sm:col-span-2 md:col-span-3 text-2xl font-bold">Groups</h2>
            {groups?.groups.map((group) => (
              <article tw="shadow-md bg-white rounded-md text-mono-800 p-4 flex flex-col items-center gap-1">
                <UsersIcon tw="w-16 h-16 p-0.5 border-4 border-mono-400 rounded-full my-4" />
                <header tw="text-lg font-bold">{group.name}</header>
                <div tw="text-sm text-mono-500">{group.desc}</div>
              </article>
            ))}
          </div>
        </section>
        <section tw="bg-mono-100 dark:bg-mono-700 w-full flex justify-center items-start flex-1">
          <div tw="grid max-w-4xl gap-8 p-8 grid-cols-[repeat(2,1fr)] sm:grid-cols-[repeat(3,1fr)] md:grid-cols-[repeat(5,1fr)] w-full">
            <h2 tw="col-span-2 sm:col-span-3 md:col-span-5 text-2xl font-bold">Users</h2>
            {users?.users.map((user) => (
              <div tw="shadow-md bg-white rounded-md text-mono-800 p-8 flex flex-col items-center gap-2 text-lg">
                <UserIcon tw="w-8 h-8" />
                {user.name}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
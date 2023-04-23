import React, { ReactNode } from 'react';
import Head from 'next/head'
import { blackPage, whitePage, page, contentColumn } from './page.css';

interface PageProps {
  title: string,
  children: ReactNode,
  dark?: boolean
}

const Page: React.FC<PageProps> = ({ title, children, dark }: PageProps) => {
  return <>
    <Head>
      {/* <title>Balancer: {title}</title> */}
      <meta name="description" content={title} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <main className={(dark ? blackPage : whitePage) + ' ' + page}>
      <div className={contentColumn}>
        {children}
      </div>
      </main>
  </>;
}

export default Page;
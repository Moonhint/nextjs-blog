import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import Layout from '../../components/layout';

import styles from './first-post.module.scss';

export default function MyFirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <div className={styles.postContainer}>
                <h1>First Post</h1>
                <div className="brok">
                    Back to <Link href="/">Home</Link>
                </div>
                <Image 
                    src="/images/profile.jpg" 
                    width={144}
                    height={144}
                    alt="Antoni" 
                />
            </div>
        </Layout>
    );
};

import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layouts'

export default function Initialize() {
    return (
        <Layout>
            <Head>
                <title>Chatbot</title>
            </Head>
            <h1>Loading Chatbot...</h1>
            <h2>   
                <Link href="/">Back to home</Link>

            </h2>
        </Layout>
    );
}
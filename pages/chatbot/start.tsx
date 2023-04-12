import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layouts';
import React, { useState, FormEvent } from 'react'; // useState for form state and response from API
import { Configuration, OpenAIApi } from "openai"; // openai api for chat GPT
import styles from '@component/styles/Home.module.css'



export default function Start() {

    interface Chat {
        formValue: string;
        response: {
            role: string,
            content: string
        } | undefined
    }

    const [chat, setChat] = useState<Chat>({
        formValue: '',
        response: {
            role: '',
            content: '',
        }
    })

    const handleChange = (e: FormEvent) => {
        const form = e.target as HTMLFormElement
        setChat({
            ...chat,
            [form.name]: form.value
        });
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        getCompletion()      
	}

    // const configuration = new Configuration({ // moved to api/openai
    //     apiKey: process.env.OPENAI_API_KEY,
    // });
    // const openai = new OpenAIApi(configuration);
    
    // async function getCompletion() { // moved to api/openai
    // try {
    //     const completion = await openai.createChatCompletion({
    //     model: "gpt-3.5-turbo",
    //     messages: [{role: "user", content: chat.formValue}],
    //     });
    //     setChat({...chat, response: completion.data.choices[0].message});
    //     console.log(completion.data.choices[0].message.content);
    // } catch (error: any) {
    //     if (error.response) {
    //     console.log(error.response.status);
    //     console.log(error.response.data);
    //     } else {
    //     console.log(error.message);
    //     }
    // }
    // }


    return (
        <Layout>
            <Head>
                <title>Chatbot</title>
            </Head>
            <h1>Loading Chatbot...</h1>
            <h2>   
                <Link href="/">Back to home</Link>
            </h2>
            <div className={styles.card}>
                <p>You: {chat.formValue}</p>
                <p>Assistant: {chat.response.content}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Chat:<input type="text" name="formValue" onChange={handleChange}></input></label><button>Send</button>
            </form>
        </Layout>
    );
}
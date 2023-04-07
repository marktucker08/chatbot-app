import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layouts';
import React, { useState, FormEvent } from 'react'; // useState for form state and response from API
import { Configuration, OpenAIApi } from "openai"; // openai api for chat GPT



export default function Start() {

    interface Chat {
        formValue: string;
        response: string | undefined;
    }

    const [chat, setChat] = useState<Chat>({
        formValue: '',
        response: '' 
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

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    
    async function getCompletion() { 
    try {
        const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Hello world",
        });
        setChat({...chat, response: completion.data.choices[0].text});
        console.log(completion.data.choices[0].text);
    } catch (error: any) {
        if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
        } else {
        console.log(error.message);
        }
    }
    }


    return (
        <Layout>
            <Head>
                <title>Chatbot</title>
            </Head>
            <h1>Loading Chatbot...</h1>
            <h2>   
                <Link href="/">Back to home</Link>
            </h2>
            <div>
                <p>You: Hello World!</p>
                {/* <p>{completion.data.choices[0].text}</p> */}
            </div>
            <form onSubmit={handleSubmit}>
                <label>Chat:<input type="text" name="formValue" onChange={handleChange}></input></label><button>Send</button>
            </form>
        </Layout>
    );
}
'use client';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';

export default function DefaultForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    function formSubmit(e) {
        e.preventDefault();

        const formData = {
            email: email,
            name: name,
            message: message
        };

        fetch("https://getform.io/f/98002d7b-0a04-4e63-8fa4-14bcf6d7b361", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => {
                e.target.reset();
                setEmail('')
                setMessage('')
                setName('')
            })
            .catch(error => {
                e.target.reset();
                setEmail('')
                setMessage('')
                setName('')
            })
    }


    return (
        <div className='items-center justify-center flex mx-auto font-primary'>
            <form onSubmit={formSubmit} className="flex flex-col gap-4 h-auto max-w-[600px] mx-4 sm:mx-0 w-full  mb-[12rem] p-2 bg-[#68538f]"
            >
                <div>
                    <div className="mb-2 p-2 block font-bold">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="testemail@gmail.com"
                        sizing="lg"
                        required
                        type="email"
                    />
                </div>
                <div>
                    <div className="mb-2 p-2 block font-bold">
                        <Label
                            htmlFor="name1"
                            value="Your name"
                        />
                    </div>
                    <TextInput
                        placeholder='Carolyn Nicole'
                        id="name1"
                        required
                        type="text"
                        sizing="lg"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <div className="mb-2 p-2 block font-bold">
                        <Label
                            htmlFor="information"
                            value="Message"
                        />
                    </div>
                    <Textarea
                        id="information"
                        required
                        rows={5}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder='Tell me how I can help you!'
                        type="text"
                    />
                </div>
                <Button className='hover:bg-[#ee5e82] hover:text-[#68538f] p-2 font-semibold' type='submit'>
                    Submit
                </Button>
            </form>
        </div>

    )
}
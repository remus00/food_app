'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userCreated, setUserCreated] = useState(false);
    const [creatingUser, setCreatingUser] = useState(false);
    const [error, setError] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setCreatingUser(false);
        setError(false);

        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            setUserCreated(true);
        } else {
            setError(true);
        }

        setCreatingUser(false);
    };

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl uppercase italic font-semibold mb-4">
                Register
            </h1>

            {userCreated && (
                <div className="my-4 text-center">
                    User created. <br />
                    Now you can&nbsp;
                    <a href="/login" className="text-primary underline font-semibold">
                        login &raquo;
                    </a>
                </div>
            )}

            {error && (
                <div className="my-4 text-center">
                    An error has occurred.
                    <br /> Please try Again
                </div>
            )}

            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={creatingUser}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={creatingUser}
                />
                <button type="submit" disabled={creatingUser}>
                    Register
                </button>
                <div className="my-4 text-center text-gray-500">or login with providers</div>
                <button className="flex gap-4 items-center justify-center">
                    <Image src={'/assets/google.png'} alt="google-icon" width={24} height={24} />
                    Login with google
                </button>

                <p className="text-center my-4 border-t pt-4">
                    Existing account?&nbsp;
                    <Link href={'/login'} className="text-primary underline font-semibold">
                        Login Here
                    </Link>
                </p>
            </form>
        </section>
    );
};

export default RegisterPage;

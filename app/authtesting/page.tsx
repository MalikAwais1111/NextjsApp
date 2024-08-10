'use client'
import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthtestPage() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <div className="pt-28 align-middle text-center">
            <h1>Authentication Test Page</h1>
            {session ? (
                <>
                    <p>Signed in as {session.user?.name}</p>
                    <button onClick={() => signOut()}>Sign out</button>
                </>
            ) : (
                <>
                    <p>You are not signed in.</p>
                    <button onClick={() => signIn()}>Sign in</button>
                </>
            )}
        </div>
    );
}

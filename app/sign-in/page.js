import { SignIn } from "@clerk/nextjs"

const SignInPage = () => {
    return (
        <main className='flex items-center justify-center h-full w-screen'>
            <SignIn signUpUrl="/sign-up" />
        </main>
    )
}

export default SignInPage
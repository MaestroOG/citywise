'use client';
import Container from '@/components/Container';
import { useRouter } from 'next/navigation';

const ErrorPage = () => {
    const router = useRouter()
    const handleClick = () => {
        router.replace('/')
    }
    return (
        <main className="px-4 md:px-40 py-5">
            <Container className={'flex items-center justify-center flex-col space-y-4'}>
                <p className='text-center'>City Not Found</p>
                <button className='bg-black text-white hover:bg-gray-800 font-medium py-2 px-4 rounded' onClick={handleClick}>Back to home</button>
            </Container>
        </main>
    )
}

export default ErrorPage
import { useLoaderData, useParams } from "react-router-dom";



interface AllPage {
    id: number;
    name: string;
    username: string;
    email: string;
}

interface UserParams {
    userId: string;
}

export const userLoader = async ({ params }: { params: UserParams }) => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/`);
    const user = await response.json();
    return user;
}

function UsersAllPage() {

    const user = useLoaderData() as AllPage;
    const userId = useParams();
    return (
        <>
            <h1>{user.name}</h1>
            <p>Username: {user.name}</p>
            <p>Email: {user.email}</p>
        </>
    )
}

export default UsersAllPage

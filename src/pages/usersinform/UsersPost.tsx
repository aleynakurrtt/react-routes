


interface usePost {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export const userPostLoader = async ({ }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const post = await response.json();
    return post;
}

function UsersPost() {
    return (
        <div>UsersPost</div>
    )
}

export default UsersPost
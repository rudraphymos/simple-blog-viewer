export default async function BlogDetails({ params }) {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }  
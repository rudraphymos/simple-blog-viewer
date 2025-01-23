import Link from 'next/link';

export default async function BlogDetails({ params }) {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="container mx-auto px-4 py-10">
      <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-primary mb-6">{post.title}</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>{post.body}</p>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          <p>Post ID: {id}</p>
        </div>
        <div className="mt-6">
          <Link 
            href="/" 
            className="inline-block px-6 py-3 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-200"
          >
            Back to Blog List
          </Link>
        </div>
      </article>
    </div>
  );
}
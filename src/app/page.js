import Link from 'next/link';

export default async function HomePage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="mb-2">
            <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
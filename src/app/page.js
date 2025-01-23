import Link from 'next/link';

export default async function HomePage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-primary">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, 10).map((post) => (
          <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 text-base line-clamp-3">
                {post.body}
              </p>
            </div>
            <div className="px-6 pb-6">
              <Link href={`/blog/${post.id}`} className="inline-block px-5 py-3 mt-4 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-200">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
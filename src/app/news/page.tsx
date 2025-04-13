import { sanityClient } from '@/utils/sanity.client';
import Link from 'next/link';
import Image from 'next/image';

export async function getStaticProps() {
  const posts = await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc){
    _id, title, slug, excerpt, mainImage { asset -> { url } }
  }`);
  return { props: { posts } };
}

export default function BlogPage({ posts }: { posts: any[] }) {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div key={post._id} className="bg-white shadow p-4 rounded">
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              width={600}
              height={300}
              className="rounded"
            />
            <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
            <Link href={`/blog/${post.slug.current}`}>
              <span className="text-blue-600 mt-2 inline-block hover:underline">Read more</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

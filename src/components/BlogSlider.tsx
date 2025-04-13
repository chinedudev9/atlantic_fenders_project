'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { sanityClient } from '@/utils/sanity.client';

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage: { asset: { url: string } };
}

const BlogSlider = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"] | order(publishedAt desc)[0...5] {
        _id, title, slug, excerpt, mainImage { asset -> { url } }
      }`)
      .then((data) => setPosts(data));

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % posts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [posts.length]);

  if (!posts.length) return null;

  const post = posts[current];

  return (
    <div className="bg-gray-100 h-[60vh] p-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            width={600}
            height={400}
            className="rounded"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="mb-4">{post.excerpt}</p>
          <Link href={`/blog/${post.slug.current}`}>
            <span className="text-blue-600 hover:underline">Read more</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;

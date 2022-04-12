import type { LoaderFunction } from "@remix-run/node";
import * as goGol from "go-gol.mdx";
import * as nexdle from "nexdle.mdx";
import * as genLicense from "gen-license.mdx";
import { Link, useLoaderData } from "@remix-run/react";

function postFromModule(module: any) {
  return {
    slug: module.filename.replace(/\.mdx?$/, ""),
    ...module.attributes.meta,
  };
}

export const loader: LoaderFunction = () => {
  return [
    postFromModule(genLicense),
    postFromModule(nexdle),
    postFromModule(goGol),
  ];
};

export default function BlogIndex() {
  const posts = useLoaderData();
  return (
    <div className="px-6">
      <h2>Posts</h2>

      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>

            {post.description && (
              <p className="m-0 lg:m-0">{post.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

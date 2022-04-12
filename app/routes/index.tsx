import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return {
    title: "nexxel's blog",
    description: "here nexxel writes about stuff",
  };
};

export default function Index() {
  return (
    <div className="flex justify-center items-center text-center text-4xl px-6 h-screen">
      <div>
        <h1 className="font-bold">Welcome to my bare-bones blog</h1>
        <Link to={"/blog"}>
          <button className="pt-6">
            <span className="font-normal text-xl bg-black text-white px-4 py-2 hover:opacity-90 transition-opacity duration-300 rounded-sm shadow-2xl">
              Go to the blog
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

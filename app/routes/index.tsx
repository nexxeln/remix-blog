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
    <div className="flex items-center justify-center h-screen px-6 text-4xl text-center">
      <div>
        <h1 className="font-black font-Karla">Welcome to nexxel's blog.</h1>
        <Link to={"/blog"}>
          <button className="px-5 py-2 mt-5 text-base font-bold text-gray-800 bg-white border border-gray-400 rounded shadow font-Karla hover:bg-gray-100">
            Go to the blog!
          </button>
        </Link>
      </div>
    </div>
  );
}

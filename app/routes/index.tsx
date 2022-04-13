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
        <h1 className="font-bold font-Karla font-black">Welcome to my bare-bones blog.</h1>
        <Link to={"/blog"}>
          <button className="font-Karla font-bold text-base px-5 py-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow mt-5">
              Go to the blog!
          </button>
        </Link>
      </div>
    </div>
  );
}

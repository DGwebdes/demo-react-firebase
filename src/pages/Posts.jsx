import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { DisplayMessage } from "../components/DisplayMessage";
import { UserInput } from "../components/UserInput";

function Posts() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">The Yapping!</h1>
      <div className="h-screen flex">
        <aside className="h-full border"></aside>
        <section className="flex-2 flex flex-col border">
          <DisplayMessage />
          <UserInput />
        </section>
      </div>
    </Layout>
  );
}

export default Posts;

'use client'

import { useRouter } from "next/navigation";
import React from "react";

const NewUsersPage = () => {
  const router = useRouter();

  return (
    <>
      <div> NewUsersPage</div>
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        {" "}
        Create
      </button>
    </>
  );
};

export default NewUsersPage;

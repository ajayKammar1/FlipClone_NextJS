import Prodcuts from "@/Components/Product/Prodcuts";
import { useRouter } from "next/router";

import React, { useEffect } from "react";

const index = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/User/login");
  }, [router]);
  return (
    <>
      <div>
        <Prodcuts />
      </div>
    </>
  );
};

export default index;

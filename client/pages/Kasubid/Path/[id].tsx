import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Details() {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    console.log(router.query);
  }, [router.query, router.isReady]);

  const { id } = router.query;
  return <div>Params ID: {id} </div>;
}

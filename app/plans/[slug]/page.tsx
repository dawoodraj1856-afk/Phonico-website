import React from "react";

async function page({ params }: any) {
  const { slug } = await params;
  
  return <div>{slug}</div>;
}

export default page;

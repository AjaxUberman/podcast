import React from "react";

const page = ({ params }: { params: { podcastId: string } }) => {
  console.log(params);
  return (
    <div className="text-white-1">Podcast Details for {params.podcastId}</div>
  );
};

export default page;

import Image from "next/image";
import React from "react";

const PodcastCard = ({
  imgUrl,
  title,
  description,
  podcastId,
}: {
  imgUrl: string;
  title: string;
  description: string;
  podcastId: number;
}) => {
  return (
    <div className="cursor-pointer group ">
      <div className="flex flex-col gap-2 ">
        <Image
          src={imgUrl}
          width={160}
          height={160}
          alt={title}
          className="aspect-square h-fit w-full rounded-md shadow-sm group-hover:scale-110 group-hover:rotate-1 transition duration-200 ease-in"
        />
        <div className=" flex flex-col">
          <h1 className="font-semibold text-16 truncate">{title}</h1>
          <h3 className="opacity-70 text-12 capitalize">{description}</h3>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;

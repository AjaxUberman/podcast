import { podcastData } from "@/constants";
import React from "react";
import PodcastCard from "../PodcastCard";
const MainPage = () => {
  return (
    <div className=" flex flex-col ">
      <section className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-white-1">Trending Podcasts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 rounded-lg shadow-sm gap-8 ">
          {podcastData.map((podcast) => {
            return (
              <PodcastCard
                key={podcast.id}
                imgUrl={podcast.imgURL}
                title={podcast.title}
                description={podcast.description}
                podcastId={podcast.id}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default MainPage;

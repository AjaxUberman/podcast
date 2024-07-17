"use client";
import React from "react";
import PodcastCard from "../PodcastCard";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import LoaderSpinner from "../LoaderSpinner";
const MainPage = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);
  if (!trendingPodcasts) return <LoaderSpinner />;

  console.log(trendingPodcasts);
  return (
    <div className=" flex flex-col ">
      <section className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-white-1">Trending Podcasts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 rounded-lg shadow-sm gap-8 ">
          {trendingPodcasts?.map((podcast) => {
            return (
              <PodcastCard
                key={podcast._id}
                imgUrl={podcast.imageUrl}
                title={podcast.podcastTitle}
                description={podcast.podcastDescription}
                podcastId={podcast._id}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default MainPage;

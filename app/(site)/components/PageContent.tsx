"use client";

import SongItem from "@/components/SongItem";
import { Song } from "@/types";

interface PageContentPros {
  songs: Song[];
}

const PageContent: React.FC<PageContentPros> = ({ songs }) => {
  {
    return songs.length == 0 ? (
      <div className="mt-4 text-neutral-400">There is no songs!</div>
    ) : (
      <div
        className="
      grid
      grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      2xl:grid-cols-8
      gap-4
      mt-4
      "
      >
        {songs.map((song) => (
          <SongItem key={song.id} onClick={() => {}} data={song} />
        ))}
      </div>
    );
  }
};

export default PageContent;

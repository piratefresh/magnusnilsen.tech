'use client'

import { SpotifyIcon } from 'components/shared/Icons/SpotifyIcon'
import getNowPlayingItem, { PlayingNowPayload } from 'lib/spotify.api'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

export interface SpotifyWidgetProps {
  playingNow: PlayingNowPayload
}

export const SpotifyWidget = ({ playingNow }: SpotifyWidgetProps) => {
  const songPlaying = playingNow ? (
    <div>
      <p className="mb-0 text-[#00D95F]">
        {playingNow?.isPlaying ? `Currently Playing ` : `Offline, last played`}
      </p>

      <Link href={playingNow?.songUrl}>
        <p className="text-white">{playingNow?.title}</p>
      </Link>
      <p className="text-xs text-white">{playingNow?.artist}</p>
    </div>
  ) : (
    <div>
      <p>No song found</p>
    </div>
  )
  return (
    <div
      className="h-full rounded-[12px]"
      style={{
        background: 'linear-gradient(270deg, #104F2B 4.43%, #0F0F0F 138.42%)',
      }}
    >
      <div className="flex items-center justify-between p-4 text-white">
        {songPlaying}
        <Image
          priority
          src="/images/spotifyIcon.svg"
          height={50}
          width={50}
          alt="Spotify Icon"
        />
      </div>
    </div>
  )
}

'use client'

import { usePreview } from 'lib/sanity.preview'
import { homePageQuery, socialsQuery } from 'lib/sanity.queries'
import getNowPlayingItem from 'lib/spotify.api'
import type { HomePagePayload } from 'types'

import { HomePage } from './HomePage'

export async function HomePagePreview({ token }: { token: null | string }) {
  const home: HomePagePayload = usePreview(token, homePageQuery)
  const playingNow = await getNowPlayingItem(
    process.env.NEXT_SPOTIFY_CLIENT_ID,
    process.env.NEXT_SPOTIFY_CLIENT_SECRET,
    process.env.NEXT_SPOTIFY_CLIENT_REFRESH_TOKEN
  )

  const socials = usePreview(token, socialsQuery)

  if (!home) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  return <HomePage data={home} playingNow={playingNow} socials={socials} />
}

import { HomePage } from 'components/pages/home/HomePage'
import { HomePagePreview } from 'components/pages/home/HomePagePreview'
import { PreviewSuspense } from 'components/preview/PreviewSuspense'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import { getHomePage } from 'lib/sanity.client'
import getNowPlayingItem from 'lib/spotify.api'
import { previewData } from 'next/headers'
import { notFound } from 'next/navigation'

export default async function IndexRoute() {
  const token = previewData().token || null
  const data = (await getHomePage({ token })) || {
    title: '',
    overview: [],
    showcaseProjects: [],
  }

  const playingNow = await getNowPlayingItem(
    process.env.NEXT_SPOTIFY_CLIENT_ID,
    process.env.NEXT_SPOTIFY_CLIENT_SECRET,
    process.env.NEXT_SPOTIFY_CLIENT_REFRESH_TOKEN
  )

  if (!data && !token && !playingNow) {
    notFound()
  }

  return (
    <>
      {token ? (
        <>
          <PreviewSuspense
            fallback={
              <PreviewWrapper>
                <HomePage data={data} playingNow={playingNow} />
              </PreviewWrapper>
            }
          >
            <HomePagePreview token={token} />
          </PreviewSuspense>
        </>
      ) : (
        <HomePage data={data} playingNow={playingNow} />
      )}
    </>
  )
}

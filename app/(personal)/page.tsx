import { HomePage } from 'components/pages/home/HomePage'
import { HomePagePreview } from 'components/pages/home/HomePagePreview'
import { PreviewSuspense } from 'components/preview/PreviewSuspense'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import { getHomePage, getSocials } from 'lib/sanity.client'
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

  const { socialsResume } = (await getSocials({ token })) || {
    github: '',
    linkedin: '',
    resume: '',
  }

  console.log('socials: ', socialsResume)

  const playingNow = await getNowPlayingItem(
    process.env.NEXT_SPOTIFY_CLIENT_ID,
    process.env.NEXT_SPOTIFY_CLIENT_SECRET,
    process.env.NEXT_SPOTIFY_CLIENT_REFRESH_TOKEN
  )

  if (!data && !token && !playingNow && !socialsResume) {
    notFound()
  }

  return (
    <>
      {token ? (
        <>
          <PreviewSuspense
            fallback={
              <PreviewWrapper>
                <HomePage
                  data={data}
                  playingNow={playingNow}
                  socials={socialsResume}
                />
              </PreviewWrapper>
            }
          >
            <HomePagePreview token={token} />
          </PreviewSuspense>
        </>
      ) : (
        <HomePage data={data} playingNow={playingNow} socials={socialsResume} />
      )}
    </>
  )
}

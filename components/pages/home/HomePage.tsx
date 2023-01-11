import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { Header } from 'components/shared/Header'
import ScrollUp from 'components/shared/ScrollUp'
import { resolveHref } from 'lib/sanity.links'
import { PlayingNowPayload } from 'lib/spotify.api'
import Link from 'next/link'
import type { HomePagePayload, SocialsPayload } from 'types'

import { AboutMeWidget } from './widget/AboutMeWidget'
import { BlogPostWidget } from './widget/BlogPostWidget'
import { ContactMeWidget } from './widget/ContactMeWidget'
import { CurrentProjectWidget } from './widget/CurrentProjectWidget'
import { SocialsWidget } from './widget/SocialsWidget'
import { SpotifyWidget } from './widget/SpotifyWidget'

export function HomePage({
  data,
  playingNow,
  socials,
}: {
  data: HomePagePayload
  playingNow: PlayingNowPayload
  socials: SocialsPayload
}) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview, showcaseProjects, title } = data

  return (
    <div className="space-y-20">
      {/* Header */}
      {/* {title && <Header centered title={title} description={overview} />} */}

      <div className="relative mx-auto max-w-[800px] columns-1 gap-x-4 gap-y-4 space-y-5 md:columns-2">
        <AboutMeWidget title={title} description={overview} />

        <SocialsWidget socials={socials} />

        <CurrentProjectWidget />

        <SpotifyWidget playingNow={playingNow} />

        <BlogPostWidget />

        <ContactMeWidget />
      </div>
      {/* Showcase projects */}
      <h2 className="nav-logo text-2xl text-white">Older Projects</h2>
      {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="mx-auto max-w-[100rem] rounded-[12px] border">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project._type, project.slug)
            if (!href) {
              return null
            }
            return (
              <Link key={key} href={href}>
                <ProjectListItem project={project} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )}

      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </div>
  )
}

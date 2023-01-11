import { DocsIcon } from 'components/shared/Icons/DocsIcon'
import { LinkedinIcon } from 'components/shared/Icons/LinkedinIcon'
import Image from 'next/image'
import GithubIcon from 'public/image/githubIcon.png'
import { memo, SVGProps } from 'react'

export const SocialsWidget = () => {
  return (
    <div className="relative h-[200px]">
      <div className="absolute inset-0 w-full rounded-[12px]">
        <Image
          src="/images/socialsbg.svg"
          className="h-[200px] rounded-[12px]"
          alt="socials background"
          width={390}
          height={170}
        />
      </div>

      <div className="relative flex h-full w-full flex-row items-center justify-center gap-4">
        <div className="flex cursor-pointer flex-col items-center">
          <Image
            width={68}
            height={68}
            src="/images/DocsIcon.svg"
            alt="Resume Link"
          />
          <p className="text-white">Resume</p>
        </div>

        <div className="flex cursor-pointer flex-col items-center">
          <Image
            width={68}
            height={68}
            src="/images/GithubIcon.svg"
            alt="Github Link"
          />
          <p className="text-white">Github</p>
        </div>

        <div className="flex cursor-pointer flex-col items-center">
          <Image
            width={68}
            height={68}
            src="/images/LinkedinIcon.svg"
            alt="Linkedin Link"
          />
          <p className="text-white">Linkedin</p>
        </div>
      </div>
    </div>
  )
}

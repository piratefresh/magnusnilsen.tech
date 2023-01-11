import Image from 'next/image'
import Link from 'next/link'
import { SocialsPayload } from 'types'

export const SocialsWidget = ({ socials }: { socials: SocialsPayload }) => {
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
        <Link
          href={socials.resume}
          className="flex cursor-pointer flex-col items-center hover:animate-bounce"
        >
          <Image
            width={68}
            height={68}
            src="/images/DocsIcon.svg"
            alt="Resume Link"
          />
          <p className="text-white">Resume</p>
        </Link>

        <Link
          href={socials.github}
          className="flex cursor-pointer flex-col items-center hover:animate-bounce"
        >
          <Image
            width={68}
            height={68}
            src="/images/GithubIcon.svg"
            alt="Github Link"
          />
          <p className="text-white">Github</p>
        </Link>

        <Link
          href={socials.linkedin}
          className="flex cursor-pointer flex-col items-center hover:animate-bounce"
        >
          <Image
            width={68}
            height={68}
            src="/images/LinkedinIcon.svg"
            alt="Linkedin Link"
          />
          <p className="text-white">Linkedin</p>
        </Link>
      </div>
    </div>
  )
}

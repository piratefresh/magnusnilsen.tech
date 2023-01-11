import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export const CurrentProjectWidget = () => {
  return (
    <div
      className="overflow relative rounded-[12px]"
      style={{
        background:
          'linear-gradient(80.32deg, #151515 9.63%, rgba(0, 0, 0, 100%) 128.61%)',
      }}
    >
      <div className="relative flex">
        <div className="absolute top-4 left-2 flex h-full flex-col p-4 text-white">
          <h3 className="whitespace-nowrap text-xl font-bold">The Inn</h3>
          <p className="whitespace-nowrap text-xs">RPG Network</p>

          <button className="mt-auto mb-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#D9D9D9] align-bottom">
            <Link href="https://the-inn.vercel.app" target="_blank">
              <ArrowUpRightIcon className="h-4 w-4 text-black" />
            </Link>
          </button>
        </div>

        <div className="ml-8">
          <Image
            src="/images/the-inn-preview.png"
            alt="The Inn Preview"
            width={350}
            height={180}
          />
        </div>
      </div>
    </div>
  )
}

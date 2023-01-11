import Link from 'next/link'

export const BlogPostWidget = () => {
  return (
    <section className="rounded-[12px] border bg-[#1E1E1E] p-4 text-white">
      <h5 className="mb-2 text-xl">A brief introduction about me</h5>
      <p className="text-xs">w.i.p</p>

      <button className="mt-4 rounded-lg bg-[#D9D9D9] p-2 text-xs text-black">
        <Link href="/profile">Read more</Link>
      </button>
    </section>
  )
}

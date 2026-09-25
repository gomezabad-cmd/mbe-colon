import RelatedPosts from '@/components/RelatedPosts'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="pt-[88px]">
      {children}
      <RelatedPosts />
    </main>
  )
}

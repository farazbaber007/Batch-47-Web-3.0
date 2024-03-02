import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Link href={"react-learning"}> React Learning</Link>
      <Link href={"react-learning/advanced-learning"}> Advanced Learning</Link>
    </main>
  )
}

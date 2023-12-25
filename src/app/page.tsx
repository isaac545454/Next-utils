import { CardList } from "@/Components/CardList"
import { Skeleton } from "@/Components/Skeleton"
import { TestList } from "@/Components/TestList"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<Skeleton />}>
        <TestList />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <CardList />
      </Suspense>
    </main>
  )
}

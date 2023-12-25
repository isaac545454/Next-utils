import { CardListResponse } from "@/models"
import Image from "next/image"

async function getData(): Promise<CardListResponse> {
  const res = await fetch("https://rickandmortyapi.com/api/character")
  return res.json()
}
export const CardList = async () => {
  const { results } = await getData()

  return (
    <div>
      {results.map((item) => (
        <div key={item.id}>
          <Image
            src={item.image}
            width={220}
            height={220}
            alt={item.name}
            quality={100}
            className="mx-auto"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPUqwcAAOEArzGi5DEAAAAASUVORK5CYII="
          />
        </div>
      ))}
    </div>
  )
}

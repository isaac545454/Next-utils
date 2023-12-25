import { CardListResponse } from "@/models"
import Image from "next/image"

async function getData(): Promise<CardListResponse> {
  // Adiciona um atraso de 3 segundos antes de fazer a solicitação
  await new Promise((resolve) => setTimeout(resolve, 5000))

  const res = await fetch("https://rickandmortyapi.com/api/character")
  return res.json()
}

export const TestList = async () => {
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

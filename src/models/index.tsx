export interface Info {
  count: number
  pages: number
  next: string
  prev?: null
}
export interface CardListResponse {
  info: Info
  results: Results[]
}
export interface Results {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode?: string[] | null
  url: string
  created: string
}
export interface Origin {
  name: string
  url: string
}
export interface Location {
  name: string
  url: string
}
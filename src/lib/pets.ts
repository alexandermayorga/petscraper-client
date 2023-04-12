import { iPet, iPetsResult } from "./iPet";

export async function getPetsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const baseURI = `${process.env.API_URI}api/search`;
  const res = await fetch(baseURI);

  const allPetsData = await res.json();

  return allPetsData;
}

export async function getAllPostIds() {
  const baseURI = `${process.env.NEXT_PUBLIC_API_URI}api/search`;

  // "total":124,"pages":2,"size":100,"offset":0,"count":100,"r

  // Call an external API endpoint to get posts
  //TODO: Need to get next pages
  const results = await getPets(baseURI, 100, 0, 1)

  // Get the paths we want to prerender based on pets
  const paths = results.map((pet: iPet) => ({
    params: { slug: pet.slug },
  }));

  return paths;
}

async function getPets(uri:string, size:number, offset:number, page:number, results:iPet[] = []) : Promise<iPet[]> {
  const fetchURI = `${uri}?size=${size}&offset=${offset}`;
  const res = await fetch(fetchURI);
  const petsResult:iPetsResult = await res.json();

  const newResults = [...results,...petsResult.results]

  if(petsResult.pages == page) return newResults;

  return getPets(uri,size,offset+size,page+1,newResults)
}

export async function getPetData(slug: string) {
  // Call an external API endpoint to get pet
  const res = await fetch(`${process.env.API_URI}api/animals/slug/${slug}`);
  const pet = await res.json();

  // Combine the data with the id
  return pet;
}

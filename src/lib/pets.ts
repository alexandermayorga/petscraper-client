import { iPet } from "./iPet";

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

  // Call an external API endpoint to get posts
  //TODO: Need to get next pages
  const res = await fetch(`${baseURI}?size=100`);
  const pets = await res.json();

  // Get the paths we want to prerender based on pets
  const paths = pets.results.map((pet: iPet) => ({
    params: { slug: pet.slug },
  }));

  return paths;
}

export async function getPetData(slug: string) {
  // Call an external API endpoint to get pet
  const res = await fetch(`${process.env.API_URI}api/animals/slug/${slug}`);
  const pet = await res.json();

  // Combine the data with the id
  return pet;
}

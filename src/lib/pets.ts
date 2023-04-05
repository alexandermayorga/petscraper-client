export async function getPetsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const baseURI = `${process.env.API_URI}api/search`;
  const res = await fetch(baseURI);

  const allPetsData = await res.json();

  return allPetsData;
}
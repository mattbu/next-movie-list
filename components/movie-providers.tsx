import { API_URL } from "../app/(home)/page";

async function getProviders(id) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

export default async function MovieProviders({ id }: { id: string }) {
  const providers = await getProviders(id);
  console.log(providers, "------------");
  return (
    <div>
      <h1>Providers</h1>
    </div>
  );
}

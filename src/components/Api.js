export async function getMonsterList() {
  const response = await fetch("http://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  return result;
}

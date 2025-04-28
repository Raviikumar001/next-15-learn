export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intential delay");
    }, 2000);
  });
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}

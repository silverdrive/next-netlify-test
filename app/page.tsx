export default function Home({ params }: any) {
  return (
    <>
      <pre>{JSON.stringify(params)}</pre>
      <p>Hello from root page.</p>
    </>
  );
}
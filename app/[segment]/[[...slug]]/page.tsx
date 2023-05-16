export default function Home({ params }: any) {
  return (
    <>
      <pre>{JSON.stringify(params)}</pre>
      <p>Hello from page inside slug.</p>
    </>
  );
}

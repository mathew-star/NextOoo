export default function PostsLayout({ children }) {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Posts</h1>
      {children}
    </section>
  );
}

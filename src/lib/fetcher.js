export async function jsonPlaceholderFetch(url, opts = {}) {
  const res = await fetch(url, { next: { revalidate: 60 }, ...opts });
  if (!res.ok) {
    const err = new Error('Network response was not ok');
    err.status = res.status;
    throw err;
  }
  return res.json();
}

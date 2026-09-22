export async function sendContact(
  fields: { name: string; email: string; message: string },
  fetcher: typeof fetch = fetch,
) {
  const response = await fetcher("https://formspree.io/f/mnjwygzr", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: fields.name.trim(),
      email: fields.email.trim(),
      message: fields.message.trim(),
    }),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error("문의 전송 실패");
}

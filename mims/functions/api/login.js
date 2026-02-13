export async function onRequestPost(context) {
  const body = await context.request.json();

  return new Response(JSON.stringify({
    username: body.username,
    role: "ADMIN"
  }));
}
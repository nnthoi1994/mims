export async function onRequestPost(context) {
  const body = await context.request.json();

  const username = body.username;
  const password = body.password;

  return new Response(JSON.stringify({
    username,
    role: "ADMIN"
  }));
}
import fetch from "node-fetch";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export async function post(req, res) {
  try {
    const { email, password } = req.body;

    const result = await fetch(process.env.PRISMA_ENDPOINT, {
      method: "POST",
      headers,
      body: JSON.stringify({
      operationName: "signin",
      query: "mutation signin($email: String, $password: String) { login(email: $email, password: $password) {   token    __typename  }}",
      variables: { email, password }}),
    });

    const parsed = await result.json();
    console.log(parsed)

    if (typeof parsed.error !== "undefined") {
      throw new Error(parsed.error);
    }

    req.session.token = parsed.data.login.token;
    res.end(JSON.stringify({ token: parsed.data.login.token }));
  } catch (error) {
    res.end(JSON.stringify({ error: error.message }));
  }
}
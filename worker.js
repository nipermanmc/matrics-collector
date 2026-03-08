// push 03/07/2026 14:49:43
export default {
  async fetch(){
    return new Response("metrics-collector", {
      headers: {"content-type":"text/plain"}
    })
  }
}

import test from "node:test";
import assert from "node:assert/strict";
import { sendContact } from "../src/lib/contact.ts";

const fields = { name: " Test ", email: " test@example.com ", message: " Hello " };
test("문의는 정리한 입력을 전송하고 성공 응답을 기다린다", async () => {
  let finish;
  let complete = false;
  const request = sendContact(fields, async (url, options) => {
    assert.equal(url, "https://formspree.io/f/mnjwygzr");
    assert.equal(options.method, "POST");
    assert.deepEqual(JSON.parse(options.body), { name: "Test", email: "test@example.com", message: "Hello" });
    assert.ok(options.signal instanceof AbortSignal);
    return new Promise(resolve => { finish = resolve; });
  }).then(() => { complete = true; });
  await Promise.resolve();
  assert.equal(complete, false);
  finish(new Response(null, { status: 200 }));
  await request;
  assert.equal(complete, true);
});
for (const status of [400, 429, 500]) {
  test(`HTTP ${status}는 성공으로 처리하지 않는다`, async () => {
    await assert.rejects(sendContact(fields, async () => new Response(null, { status })));
  });
}
test("네트워크 실패와 시간 초과를 호출자에게 전달한다", async () => {
  for (const error of [new TypeError("Offline"), new DOMException("Timeout", "TimeoutError")]) {
    await assert.rejects(sendContact(fields, async () => { throw error; }), error);
  }
});

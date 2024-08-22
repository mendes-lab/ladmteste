test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responsbody = await response.json();
  expect(responsbody.update_at).toBeDefined();

  const parsedUpdatedAt = new Date(responsbody.update_at).toISOString();
  expect(responsbody.update_at).toEqual(parsedUpdatedAt);

  expect(responsbody.dependecies.database.version).toEqual("16.4");
  expect(responsbody.dependecies.database.max_connections).toEqual(100);
  expect(responsbody.dependecies.database.opened_connections).toEqual(3);
});

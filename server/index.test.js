const request = require("supertest");
const app = require("./index");
const connectDB = require("./config/db");
const User = require("./models/User");
// Connect to the database before running tests
beforeAll(async () => {
  await connectDB();
});

describe("Auth API", () => {
  test("should register a new user", async () => {
    const response = await request(app).post("/api/auth/register").send({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "password123",
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("user");
    expect(response.body).toHaveProperty("accessToken");
  });
  test("should login an existing user", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "john.doe@example.com",
      password: "password123",
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("user");
    expect(response.body).toHaveProperty("accessToken");
  });

  test("should not login with invalid credentials", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "john.doe@example.com",
      password: "wrongpassword",
    });
    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });
  test("should logout a user", async () => {
    const response = await request(app).post("/api/auth/logout");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message", "Logged out successfully");
  });
  test("should return 400 for missing fields during registration", async () => {
    const response = await request(app).post("/api/auth/register").send({
      firstName: "Jane",
      lastName: "Doe",
      email: "",
    });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "All fields are required");
  });
  test("should return 400 for existing user during registration", async () => {
    const response = await request(app).post("/api/auth/register").send({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "password123",
    });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "User already exists");
  });
});

afterAll(async () => {
  await User.deleteOne({ email: "john.doe@example.com" });
});

import { Request, Response } from "express";
import { Professor, IProfessor } from "../src/model/Professor";
import { Student, IStudent } from "../src/model/Student";
import {
  createProfessorController,
  getProfessorsController,
  getProfessorByEmailController,
} from "../src/controllers/UsersControllers";

describe("createProfessorController", () => {
  test("should create a new Professor", async () => {
    const mockReq: Request = {
      body: {
        name: "Test Professor",
        password: "testpassword",
        email: "testprofessor@test.com",
        user: "testuser",
      },
    } as Request;

    const mockRes: Response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as any;

    const mockSavedProf: any = {
      name: "Test Professor",
      password: "testpassword",
      email: "testprofessor@test.com",
      user: "testuser",
    };

    const mockNewProfessor = jest
      .spyOn(Professor.prototype, "save")
      .mockResolvedValueOnce(mockSavedProf);

    await createProfessorController(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "Professor created successfully",
      savedProfessor: mockSavedProf,
    });
    expect(mockNewProfessor).toHaveBeenCalled();
  });
});

//buscar professor

describe("getProfessorsController", () => {
  it("should return all professors with password field removed", async () => {
    const mockProfessors = [
      { _id: "professor1", name: "Professor 1", password: "123456" },
      { _id: "professor2", name: "Professor 2", password: "abcdef" },
    ];

    // Mocking the behavior of Professor.find method to return mockProfessors
    jest.spyOn(Professor, "find").mockResolvedValue(mockProfessors);

    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    await getProfessorsController(req, res);

    // Verifying that password field was removed from each professor
    expect(mockProfessors[0].password).toBe("");
    expect(mockProfessors[1].password).toBe("");

    // Verifying that the response status was 200 and the json response contains all professors
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ Professors: mockProfessors });
  });
});

describe("getProfessorByEmailController", () => {
  it("should return a professor when a valid email is provided", async () => {
    const req: Request = { params: { email: "test@test.com" } } as any;
    const jsonMock = jest.fn();
    const statusMock = jest.fn().mockReturnValueOnce({ json: jsonMock });
    const res = { status: statusMock } as unknown as Response;

    const professorMock = {
      name: "John Doe",
      email: "test@test.com",
      password: "password",
    };
    jest.spyOn(Professor, "findOne").mockResolvedValueOnce(professorMock);

    await getProfessorByEmailController(req, res);

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      professor: { name: professorMock.name, email: professorMock.email },
    });
  });

  it("should return a 404 error when a invalid email is provided", async () => {
    const req: Request = { params: { email: "invalid@test.com" } } as any;
    const jsonMock = jest.fn();
    const statusMock = jest.fn().mockReturnValueOnce({ json: jsonMock });
    const res = { status: statusMock } as unknown as Response;

    jest.spyOn(Professor, "findOne").mockResolvedValueOnce(null);

    await getProfessorByEmailController(req, res);

    expect(statusMock).toHaveBeenCalledWith(404);
    expect(jsonMock).toHaveBeenCalledWith({ message: "Professor not found" });
  });
});

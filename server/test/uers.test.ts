import { Request, Response } from "express";
import { Professor, IProfessor } from "../src/model/Professor";
import { Student, IStudent } from "../src/model/Student";
import { createProfessorController } from "../src/controllers/UsersControllers";

describe("createProfessorController", () => {
  test("should create a new professor", async () => {
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

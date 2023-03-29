import { Request, Response } from "express";
import { Professor, IProfessor } from "../src/model/Professor";
import { Student, IStudent } from "../src/model/Student";
import { createStudentController } from "../src/controllers/UsersControllers";

// teste do aluno
describe("CreateStudentController", () => {
  test("should create a new Student", async () => {
    const mockReq: Request = {
      body: {
        name: "Test Student",
        password: "testpassword",
        email: "testStudent@test.com",
        user: "testuser",
      },
    } as Request;

    const mockRes: Response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as any;

    const mockSavedStud: any = {
      name: "Test Student",
      password: "testpassword",
      email: "testStudent@test.com",
      user: "testuser",
    };

    const mockNewStudent = jest
      .spyOn(Student.prototype, "save")
      .mockResolvedValueOnce(mockSavedStud);

    await createStudentController(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "Student created successfully",
      savedStudent: mockSavedStud,
    });
    expect(mockNewStudent).toHaveBeenCalled();
  });
});

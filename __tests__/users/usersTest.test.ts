import { PrismaClient } from "@prisma/client";
import { resolvers } from "../../graphql/users/resolvers";
import { parseNumberOrNull } from "../../utils/parseNumberOrNull";

jest.mock("@prisma/client", () => {
  const mockPrismaClient = {
    user: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };
  return {
    PrismaClient: jest.fn(() => mockPrismaClient),
  };
});

describe("User Tests", () => {
  describe("Tests on each query", () => {
    let prisma: any;

    beforeEach(() => {
      prisma = new PrismaClient();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should return a single user", async () => {
      const mockedReturnUser = {
        id: "1",
        name: "Teste",
        email: "Teste",
      };

      prisma.user.findUnique.mockResolvedValue(mockedReturnUser);

      const result = await resolvers.queries.getUser(
        null,
        { id: mockedReturnUser.id },
        null
      );

      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: { id: Number(mockedReturnUser.id) },
      });
      expect(prisma.user.findUnique).toHaveBeenCalledTimes(1);
      expect(result).toBe(mockedReturnUser);
    });

    it("should return a list of users", async () => {
      const mockedReturnUserList = [
        {
          id: "1",
          name: "Teste",
          email: "Teste",
        },
        {
          id: "2",
          name: "Teste2",
          email: "Teste2",
        },
      ];

      prisma.user.findMany.mockResolvedValue(mockedReturnUserList);

      const result = await resolvers.queries.getUsers();

      expect(prisma.user.findMany).toHaveBeenCalledWith();
      expect(prisma.user.findMany).toHaveBeenCalledTimes(1);
      expect(result).toBe(mockedReturnUserList);
      expect(result.length).toBeGreaterThan(0);
    });

    it("should create a new user", async () => {
      const mockedNewUser = {
        name: "Teste",
        email: "Teste",
      };

      prisma.user.create.mockResolvedValue(mockedNewUser);

      const result = await resolvers.mutations.createUser(
        null,
        mockedNewUser,
        null
      );

      expect(prisma.user.create).toHaveBeenCalledTimes(1);
      expect(result).toBe(mockedNewUser);
    });

    it("should update a user", async () => {
      const mockedUser = {
        id: "1",
        name: "Teste",
        email: "Teste",
      };

      prisma.user.update.mockResolvedValue(mockedUser);

      const result = await resolvers.mutations.updateUser(
        null,
        mockedUser,
        null
      );

      expect(prisma.user.update).toHaveBeenCalledTimes(1);
      expect(result).toBe(mockedUser);
    });

    it("should delete a user", async () => {
      const mockedUser = { id: "1" };

      prisma.user.delete.mockResolvedValue(mockedUser);

      const result = await resolvers.mutations.deleteUser(
        null,
        mockedUser,
        null
      );

      expect(prisma.user.delete).toHaveBeenCalledTimes(1);
      expect(result).toBe(mockedUser);
    });
  });
  describe("Utils Methods", () => {
    it("should test parseNumber function - return Number", () => {
      const value = "2";
      const result = parseNumberOrNull(value);
      expect(typeof result).toBe("number");
    });
    it("should test parseNumber function - return null", () => {
      const value = "2a";
      const result = parseNumberOrNull(value);
      expect(result).toBe(null);
    });
  });
});

import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type GetUserResponse = {
  totalCount: number;
  users: User[];
};

// 1-way
// export async function getUsers() { ... }
// 2-way (promise because is a async function)
// export async function getUsers(): Promise<User[]> { ... }
export async function getUsers(page: number): Promise<GetUserResponse> {
  const { data, headers } = await api.get("/users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return {
    users,
    totalCount,
  };
}

export function useUsers(page: number) {
  // 1-way
  //return useQuery<User[]>( ... )
  // 2-way
  //return useQuery( ... )
  // we use an arrow function because we need to execute the function only when the query be launched
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 5, // 5 seconds
  });
}

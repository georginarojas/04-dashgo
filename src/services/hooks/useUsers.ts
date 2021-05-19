import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

// 1-way
// export async function getUsers() { ... }
// 2-way (promise because is a async function)
// export async function getUsers(): Promise<User[]> { ... }
export async function getUsers(): Promise<User[]> {
  const { data } = await api.get("/users");

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

  return users;
}

export function useUsers() {
  // 1-way
  //return useQuery<User[]>( ... )
  // 2-way
  //return useQuery( ... )
  return useQuery("users", getUsers, {
    staleTime: 1000 * 5, // 5 seconds
  });
}

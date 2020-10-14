import { createModule } from "../../lib/module";

export interface User {
  id: number;
  name: string;
}

const { find, query } = createModule<User>({ tableName: "user" });

export async function getName(id: User["id"]): Promise<string> {
  const user = await find(id);
  return user?.name ?? "unknown";
}

export function getByName(name: string): Promise<User[]> {
  return query().where({ name });
}

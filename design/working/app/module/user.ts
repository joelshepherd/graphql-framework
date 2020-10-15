import { createModule } from "../../lib/module";
import { Context } from "../context";

export interface User {
  id: number;
  name: string;
}

export const { find, query } = createModule<User>({ tableName: "user" });

export async function getName(id: User["id"]): Promise<string> {
  const user = await find(id);
  return user?.name ?? "unknown";
}

export function getByName(context: Context, name: string): Promise<User[]> {
  const { modules } = context;
  return modules.user.query().where({ name });
  // return query().where({ name });
}

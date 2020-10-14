import * as Knex from "knex";

const knex = Knex({ client: "sqlite" });

interface Model {
  id: string | number;
}

interface Options {
  tableName: string;

  // Future options
  // authoriser: Authoriser;
  // softDelete?: boolean;
  // validator: Validator;
}

export function createModule<T extends Model>({ tableName: table }: Options) {
  function query() {
    return knex.table<T>(table);
  }

  async function find(id: T["id"]) {
    return await query().where("id", id).first();
  }

  return { find, query };
}

// interface Module<T extends Model> {
//   add(data: T): Promise<T>;
//   find(id: T["id"]): Promise<T>;
//   query(): Knex.QueryBuilder<T>;
//   remove(): Promise<boolean>;
//   update(id: T["id"], data: Partial<T>): Promise<T>;
// }

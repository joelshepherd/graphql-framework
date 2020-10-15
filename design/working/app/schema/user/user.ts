import { Context } from "../../context";

export const user = function (
  root: {},
  args: { id: number },
  context: Context
) {
  return context.modules.user.find(args.id);
};

import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "~/server";

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
  });
};

export const GET = handler;
export const POST = handler;

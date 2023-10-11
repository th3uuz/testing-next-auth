import { z } from "zod";

import {
  router,
  protectedProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";



export const userRouter = router({
    me: protectedProcedure.query(async ({ ctx }) => {
        const user = await db.user.findUnique({
          where: {
            id: ctx.session.user.id,
          },
        });
        return user;
      }),
});

import { column } from "astro:db";
import { defineTable } from "astro:db";
import { defineDb } from "astro:db";

const Plantas = defineTable({
  columns: {
    id: column.number(),

    name: column.text(),

    description: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Plantas },
});

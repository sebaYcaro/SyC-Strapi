import axios from "axios"

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron: {
    enabled: true,
    tasks: {
      callApiEveryTenMinutes: {
        task: async ({ strapi }: { strapi: any }) => {
          try {
            console.log(
              "Ejecutando cron job - Hora actual:",
              new Date().toISOString()
            );
          } catch (error) {
            console.error(
              "Error al llamar a la API:",
              (error as Error).message
            );
          }
        },
        options: {
          rule: "*/10 * * * *",
          tz: "America/Mexico_City",
        },
      },
    },
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
});

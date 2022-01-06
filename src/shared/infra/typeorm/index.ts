import { Connection, createConnection, getConnectionOptions } from 'typeorm';

// const connection = createConnection()

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === "test"
          ? 'estabelecimentos_test'
          : defaultOptions.database
    })
  )
}
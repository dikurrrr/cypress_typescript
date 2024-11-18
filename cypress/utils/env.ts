const getEnv = (key: string): string => {
  const env = Cypress.env('environment')
  if (!env) {
    throw new Error("Environment is not defined")
  }

  return env === 'production'
    ? Cypress.env('production')[key]
    : env === 'staging'
    ? Cypress.env('staging')[key]
    : Cypress.env('development')[key]
};

export { getEnv }


import { randomNumber } from './number'

interface Account {
  privyid: string;
  password: string;
  email: string;
  keterangan: string;
}

const getFixtureFilePath = (): string => {
  switch (Cypress.env('environment')) {
    case 'staging':
      return 'account.staging.json';
    case 'production':
      return 'account.prod.json';
    case 'development':
    default:
      return 'account.dev.json';
  }
};

export const getAccount = (keyword: string): Cypress.Chainable<Account> => {
  const filePath = getFixtureFilePath();
  return cy.fixture(filePath).then((accounts: Account[]) => {
    const filtered = accounts.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(keyword.toLowerCase())
    );

    if (filtered.length) {
      return filtered[randomNumber(0, filtered.length - 1)];
    }

    return {
      privyid: '',
      password: '',
      email: '',
      keterangan: '',
    };
  });
};

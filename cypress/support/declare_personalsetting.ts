declare namespace Cypress {
  interface Chainable<Subject = any> {
    // Profile and Settings
    ProfileSetting(): Chainable<any>
    ProfileSetting(language: 'en' | 'id'): Chainable<Element>
    pageActivities(): Chainable<any>
    pagePreference(): Chainable<any>

    // Contact management
    switchContactSuggest(): Chainable<any>
    pageContact(): Chainable<any>
    addContact(): Chainable<any>
    removeContact(): Chainable<any>
    searchContactbyName(): Chainable<any>
    searchContactbyPrivyID(): Chainable<any>
    addYourSelfToContact(): Chainable<any>
    accountName(): Chainable<any>

    // Signature management
    pageSignature(): Chainable<any>
    addImageSignature(): Chainable<any>
    showSignatureDetails(): Chainable<any>
    removeSignature(): Chainable<any>

    // Security and OTP
    pageSecurity(): Chainable<any>
    SwitchOTP(): Chainable<any>
  }
}

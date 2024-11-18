declare namespace Cypress {
    interface Chainable<Subject = any> {
      // General actions
      klirkuki(): Chainable<any>
      klirkukiDocView(): Chainable<any>
      klirkukiAdm(): Chainable<any>
      switchEnt(): Chainable<any>
      switchEntDev(): Chainable<any>
      inputPIN(): Chainable<any>
      openFullpage(): Chainable<any>
      confirmButton(): Chainable<any>
      confirmReview(): Chainable<any>
      selectImageStamp(): Chainable<any>
      selectImageSeal(): Chainable<any>
      uploadFile(): Chainable<any>
      uploadFileKeepSign(): Chainable<any>
      addRecipientOnlyMe(): Chainable<any>
      addSignature(): Chainable<any>
      addReview(): Chainable<any>
      addStamp(): Chainable<any>
      addSeal(): Chainable<any>
      placementSignature(): Chainable<any>
      placementMoreSignature(): Chainable<any>
      placementSignatureSignStamp(): Chainable<any>
      placementSignatureSignSeal(): Chainable<any>
      placementSignatureSignStampSeal(): Chainable<any>
      placementEmeterai(): Chainable<any>
      placeNote(): Chainable<any>
      bulkSign(): Chainable<any>
      finishButton(): Chainable<any>
      pageAdmin(): Chainable<any>
      optionButtonDocView(): Chainable<any>
      inputIncorrectPIN5x(language: 'en' | 'id'): Chainable<Element>
      inputIncorrectPIN(language: 'en' | 'id'): Chainable<Element>
      assertCountdownErrorMessage(expectedMessage: string): Chainable<Element>
      inputIncorrectOTP(language: 'en' | 'id'): Chainable<Element>
      inputIncorrectOTP5x(language: 'en' | 'id'): Chainable<Element>
      toastSizeDocExceeds(language: 'en' | 'id'): Chainable<Element>
      uploadFileLebih25MB(language: 'en' | 'id'): Chainable<Element>
      uploadFileAndInvalidTitle(language: 'en' | 'id'): Chainable<Element>
      inputInvalidReason(): Chainable<any>
      actionWithReason(language: 'en' | 'id'): Chainable<Element>
      checkReasonInDocViewPersonal(language: 'en' | 'id'): Chainable<Element>
      folderSent(language: 'en' | 'id'): Chainable<Element>
      folderDraft(): Chainable<any>
      bulkDelete(): Chainable<any>
      bulkArchiveActionRequired(): Chainable<any>
      bulkDownloadSignedDoc(language: 'en' | 'id'): Chainable<Element>
      folderCompleted(language: 'en' | 'id'): Chainable<Element>
      saveToDraft(): Chainable<any>;
  
      // Login actions
      loginSTG(): Chainable<any>
      loginDEV(): Chainable<any>
      loginCC(): Chainable<any>
      login(accountName?: string): Chainable<any>
      loginCommandCenter(accountName?: string): Chainable<any>

      // Document actions
      assertDocList(): Chainable<any>
      FiltertoSign(): Chainable<any>
      FiltertoApprove(): Chainable<any>
      FiltertoReview(): Chainable<any>
      FiltertoStamp(): Chainable<any>
      FiltertoSeal(): Chainable<any>
      clickButtonQuickAction(): Chainable<any>
      directorySent(): Chainable<any>
      errorMessageInvalidPIN(): Chainable<any>
      downloadDocOri(language: 'en' | 'id'): Chainable<Element>
      downloadDocSigned(language: 'en' | 'id'): Chainable<Element>
      downloadAuditTrail(language: 'en' | 'id'): Chainable<Element>
      downloadDocBundle(language: 'en' | 'id'): Chainable<Element>
      
  
      // Document interactions
      rejectDoc(): Chainable<any>
      retractDocList(): Chainable<any>
      moreBtnDocView(): Chainable<any>
      moreBtnDocList(): Chainable<any>
      downloadFromDocList(): Chainable<any>
      historyfromDocList(): Chainable<any>
      archiveFromDocList(): Chainable<any>
      downloadFromDocView(): Chainable<any>
      retractDocView(): Chainable<any>
      rejectDocView(): Chainable<any>
      archiveFromDocView(): Chainable<any>
      unarchiveFromDocView(): Chainable<any>
      copylinkDocList(): Chainable<any>
      copylinkDocView(): Chainable<any>
  
      // Recipient actions
      addRecipient_EnterpriseSigner(): Chainable<any>
      addRecipient_PersonalSigner(): Chainable<any>
      addRecipient_EnterpriseApprover(): Chainable<any>
      addRecipient_EnterpriseReviewer(): Chainable<any>
      addRecipient_PersonalReviewer(): Chainable<any>
      addRecipient_EnterpriseStamper(): Chainable<any>
      addRecipient_EnterpriseSealer(): Chainable<any>
      addRecipient_EnterpriseSignStamp(): Chainable<any>
      addRecipient_EnterpriseSignSeal(): Chainable<any>
      addRecipient_EnterpriseSignStampSeal(): Chainable<any>
  
      // Freemium actions
      freemiumInactive(description: string): Chainable<any>
      
      // OTP Methods
      selectOTPMethod(method: string): Chainable<any>
      getOTP_Yopmail(email: string): Chainable<any>
      switchToIframe(): Chainable<any>
      getOTPCode(): Chainable<any>
      getOTP(email: string): Chainable<any>
      switchToDefault(): Chainable<any>
      otpMethod(): Chainable<any>
      inputOTP(yopmail: string): Chainable<any>
      getOTPFromYopmail(method: string): Chainable<any>
      returnToApp(): Chainable<any>
      completeOTPProcess(): Chainable<any>

    }
}
  
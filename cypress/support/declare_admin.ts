declare namespace Cypress {
    interface Chainable<Subject = any> {
      // Admin Management
      pageAdmin(): Chainable<any>
      addAdmin(): Chainable<any>
      searchAdminbyName(): Chainable<any>
      searchAdminbyPrivyID(): Chainable<any>
      deleteAdmin(): Chainable<any>
  
      // Group Management
      pageGroup(): Chainable<any>
      createGroup(): Chainable<any>
      addmemberGroup(): Chainable<any>
      updateGroup(): Chainable<any>
      searchGroupbyName(): Chainable<any>
      searchGroupbyShort(): Chainable<any>
      deleteGroup(): Chainable<any>
  
      // Category Management
      pageCategory(): Chainable<any>
      addCategory(): Chainable<any>
      editCategory(): Chainable<any>
      searchCategory(): Chainable<any>
      deleteCategory(): Chainable<any>
  
      // Email Logo Management
      pageEmailLogo(): Chainable<any>
      switchToogleEmailLogo(): Chainable<any>
      uploadLogo1(): Chainable<any>
      uploadLogo2(): Chainable<any>
  
      // Seal Management
      pageSeal(): Chainable<any>
      uploadSeal(): Chainable<any>
      deleteSeal(): Chainable<any>
  
      // Stamp Management
      pageStamp(): Chainable<any>
      uploadStamp(): Chainable<any>
      deleteStamp(): Chainable<any>
  
      // User Roles Management
      pageUserRoles(): Chainable<any>
      addEmployee(): Chainable<any>
      chooseRoles(): Chainable<any>
      deleteEmployee(): Chainable<any>
      pagePosition() : Chainable<any>
      buttonAddPosition() : Chainable <any>
      inputNewPosition() : Chainable <any>
      inputShortNamePosition() : Chainable <any>
      selectParentPosition() : Chainable <any>
      chooseDepartment() : Chainable <any>
      buttonCreatePosition() : Chainable <any>
      pageDepartment() : Chainable <any>
      buttonAddDepartment() : Chainable <any>
      departmentName() : Chainable <any>
      shortnameDepartment() : Chainable <any>
      parentDepartment() : Chainable <any>
      descriptionDepartment() : Chainable <any>
      colorDepartment() : Chainable <any>
      buttonCreateDepartment() : Chainable <any>

      // Payment History
      pagePaymentHistory(): Chainable<any>
      detailPayment(): Chainable<any>

    }
}
  
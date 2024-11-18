/// /<reference types="cypress" />
/// /<reference types="cypress-xpath" />

const { faker:adminfaker } = require('@faker-js/faker');
//const fake = require("faker");
// const minifaker = require('minifaker')
const addAdmin = {privyID: 'AKU1234'}
const employee = {privyID: 'AKU1234'}

function getRandomNumber(min : number, max : number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// clear cookies browser
Cypress.Commands.add('klirkukiAdm', function(){
    //cy.wait(2000).get("[data-page-number='1'] > .textLayer", {timeout: 60000}).should('be.visible')
    cy.wait(15000).clearCookies()
    }
)  

//page Admin
Cypress.Commands.add('pageAdmin', function(){
    cy.wait(2000).get("[href='/admins']").click()
    cy.wait(2000).get(".is-visible .balance__amount > .freetext", {timeout: 60000}).should('be.visible').should('have.text', 'Active')
    cy.wait(2000).get(".table-static__body > tr:nth-of-type(1)", {timeout: 60000}).should('be.visible')
    
    //Getting api balance 
    // cy.request('GET','https://stg-enterprise-command-center-dashboard-carstensz.privy.id/api/v1/manage/balances').then((response) =>{
    // expect(response.status).to.eq(200)
    // })
    }
)

//add Admin
Cypress.Commands.add('addAdmin', function(){
    cy.wait(3000).get(".ml-4").click()
    cy.wait(2000).get("[placeholder='e.g. HY7780']").type(addAdmin.privyID  )
    cy.wait(2000).get(".dropdown--search-user > .dropdown__menu", {timeout: 60000}).should('be.visible')
    cy.wait(3000).get(".p-1").click()
    cy.wait(2000).get("[data-e2eid='admins-action-add']").click()    
    }
)

//search admin by name
Cypress.Commands.add('searchAdminbyName', function(){
    cy.wait(3000).get("[placeholder='Search']").type('Devi').type("{enter}")
    cy.wait(2000).get(".input__clear").click()
    }
)

//search admin by privyid
Cypress.Commands.add('searchAdminbyPrivyID', function(){
    cy.wait(3000).get("[data-e2eid='admins-searchby'] .input__form").click()
    cy.wait(2000).get("[data-e2eid='admins-searchby'] button:nth-of-type(2)").click()
    cy.wait(3000).get("[placeholder='Search']").type(addAdmin.privyID).type("{enter}")
    cy.wait(2000).get(".input__clear").click()
    }
)

//delete admin
Cypress.Commands.add('deleteAdmin', function(){
    cy.wait(3000).get(".table-static__body > tr:nth-of-type(1) .btn").click({force:true})
    cy.wait(2000).get(".footer > .btn--primary").click()
    }
)

//page group
Cypress.Commands.add('pageGroup', function(){
    cy.wait(2000).get("[href='/groups']").click()
    cy.wait(2000).get(".is-visible .balance__amount > .freetext", {timeout: 60000}).should('be.visible').should('have.text', 'Active')
    cy.wait(2000).get(".table-static__body", {timeout: 60000}).should('be.visible')
    }
)

//create group
Cypress.Commands.add('createGroup', function(){
    cy.wait(3000).get(".ml-4").click({multiple: true})
    cy.wait(2000).get(".px-6 > div:nth-of-type(1) .input").type('Group ').type(adminfaker.internet.userName())
    cy.wait(3000).get(".px-6 > div:nth-of-type(2) .input").type("Grp ").type(adminfaker.internet.userName())
    cy.wait(2000).get("[data-e2eid='group-submit-create']").click()
    }
)

//add member group
Cypress.Commands.add('addmemberGroup', function(){
    cy.wait(2000).get("[data-e2eid='group-btn-add-member']").click()
    cy.wait(2000).get(".dropdown--search-user .input").type('DEVDE6775')
    cy.wait(4000).get(".p-1").click()
    cy.wait(2000).get(".select--multiple").click() //dropdown action user sign/review/approve dll
    cy.wait(4000).get(".select--multiple button:nth-of-type(1)").click()
    cy.wait(2000).get("[data-e2eid='group-member-submit']").click()
    }
)

//update group
Cypress.Commands.add('updateGroup', function(){
    cy.wait(2000).get(".table-static__body", {timeout: 60000}).should('be.visible')
    cy.wait(3000).get(".table-static__body > tr:nth-of-type(1) .btn").click()
    cy.wait(2000).get(".table-static__body [data-popper-placement='bottom-end'] [data-e2eid='group-list-edit']").click()
    cy.wait(2000).get(".text-brand-accent").click()

    cy.wait(2000).get("[placeholder='e.g. Developer team']").clear()
    cy.wait(2000).get("[placeholder='e.g. Developer team']").type("Update grp ").type(adminfaker.internet.userName())
    cy.wait(2000).get("[placeholder='e.g. DEV']").clear()
    cy.wait(2000).get("[placeholder='e.g. DEV']").type("Updt shrt ").type(adminfaker.internet.userName())
    cy.wait(2000).get(".freetext--body").click({multiple:true})
    }
)

//search group by name
Cypress.Commands.add('searchGroupbyName', function(){
    cy.wait(3000).get("[placeholder='Search']").type('Update').type("{enter}")
    cy.wait(5000).get(".input__clear").click()
    }
)

//search group by short name
Cypress.Commands.add('searchGroupbyShort', function(){
    cy.wait(3000).get("[data-e2eid='group-search-searchby'] .input__form").click()
    cy.wait(2000).get("[data-e2eid='group-search-searchby'] button:nth-of-type(2)").click()
    cy.wait(3000).get("[placeholder='Search']").type('Updt').type("{enter}")
    cy.wait(4000).get(".input__clear").click()
    }
)
 
//delete group
Cypress.Commands.add('deleteGroup', function(){
    cy.wait(3000).get(".table-static__body > tr:nth-of-type(1) .dropdown").click()
    cy.wait(2000).get(".table-static__body [data-popper-placement='bottom-end'] [data-e2eid='group-list-delete']").click()
    cy.wait(2000).get(".footer > .btn--primary").click()
    }
)

//page category
Cypress.Commands.add('pageCategory', function(){
    cy.wait(2000).get("[href='/document-category']").click()
    cy.wait(2000).get(".is-visible .balance__amount > .freetext", {timeout: 60000}).should('be.visible').should('have.text', 'Active')
    }
)

//add category
Cypress.Commands.add('addCategory', function(){
    cy.wait(3000).get(".ml-4").click()
    cy.wait(2000).get("body > .modal .input").type('Category ').type(adminfaker.internet.userName())
    cy.wait(2000).get(".textarea").type('this is desc doc category')
    cy.wait(2000).get("[data-e2eid='category-action-add']").click()
    }
)

//edit category
Cypress.Commands.add('editCategory', function(){
    cy.wait(3000).get("tr:nth-of-type(2) .dropdown").click()
    cy.wait(2000).get(".datatable__actions[data-popper-placement='bottom-end'] button:nth-of-type(1)").click()
    cy.wait(2000).get('.form-group__inputs > [data-testid="input-container"] > [data-testid="input"]').clear()
    //cy.wait(2000).get("body > .modal .input").clear()
    cy.wait(2000).get("body > .modal .input").type('Update Category ').type(adminfaker.internet.userName())
    cy.wait(2000).get("[data-e2eid='category-action-save']").click()
    }
)

//search category
Cypress.Commands.add('searchCategory', function(){
    cy.wait(3000).get('.ml-auto > [data-testid="input-container"] > [data-testid="input"]').type('update').type("{enter}")
    cy.wait(2000).get(".table-static__body", {timeout: 60000}).should('be.visible')
    cy.wait(2000).get(".ml-auto > .input > .persona-icon").click()
    }
)

//delete category
Cypress.Commands.add('deleteCategory', function(){
    cy.wait(4000).get("tr:nth-of-type(2) .dropdown").click()
    cy.wait(2000).get(".datatable__actions[data-popper-placement='bottom-end'] button:nth-of-type(2)").click()
    cy.wait(2000).get(".footer > .btn--primary").click()
    }
)

//page email logo
Cypress.Commands.add('pageEmailLogo', function(){
    cy.wait(2000).get("[href='/email-logo']").click()
    cy.wait(2000).get(".is-visible .balance__amount > .freetext", {timeout: 60000}).should('be.visible').should('have.text', 'Active')
    }
)

//switch toogle email logo
Cypress.Commands.add('switchToogleEmailLogo', function(){
    cy.wait(2000).get(".toggle--pill > .toggle__switch").click() // switch OFF toogle
    cy.wait(2000).get(".is-visible .balance__amount > .freetext", {timeout: 60000}).should('be.visible').should('have.text', 'Active')
    cy.wait(2000).get("[value='true']").click() // switch ON toogle
    }
)

//upload email logo 2
Cypress.Commands.add('uploadLogo1', function(){
    cy.wait(2000).get(".dropzone__input").attachFile('email logo2.png')
    cy.wait(2000).get(".modal--sm .btn--primary").click()
    cy.wait(2000).get('[data-testid="toast"]', {timeout: 60000}).should('be.visible')
    }
)

//[upload email logo
Cypress.Commands.add('uploadLogo2', function(){
    cy.wait(2000).get(".dropzone__input").attachFile('email logo.png')
    cy.wait(2000).get(".modal--sm .btn--primary").click()
    cy.wait(2000).get('[data-testid="toast"]', {timeout: 60000}).should('be.visible')
    }
)

//page seal
Cypress.Commands.add('pageSeal', function(){
    cy.wait(2000).get("[href='/enterprise-seal']").click()
    cy.wait(2000).get(".is-visible .balance__amount > .freetext", {timeout: 60000}).should('be.visible').should('have.text', 'Active')
    }
)

//upload Seal
Cypress.Commands.add('uploadSeal', function(){
    cy.wait(2000).get(".dropzone__input").attachFile('seal.png')
    cy.wait(2000).get(".modal--sm .btn--primary").click()  
    cy.wait(2000).get(".notify-group", {timeout: 60000}).should('be.visible')
    }
)

//remove seal
Cypress.Commands.add('deleteSeal', function(){
    cy.wait(2000).get(".enterprise-seal", {timeout: 60000}).should('be.visible')
    cy.wait(2000).get("section:nth-of-type(1) .persona-icon").click({force:true})
    cy.wait(2000).get(".footer > .btn--danger").click()
    cy.wait(2000).get(".notify-group", {timeout: 60000}).should('be.visible')
    }
)

//page stamp
Cypress.Commands.add('pageStamp', function(){
    cy.wait(2000).get("[href='/enterprise-stamp']").click()
    cy.wait(2000).get(".is-visible .balance__amount > .freetext", {timeout: 60000}).should('be.visible').should('have.text', 'Active')
    }
)

//upload stamp
Cypress.Commands.add('uploadStamp', function(){
    cy.wait(2000).get(".dropzone__input").attachFile('stamp.png')
    cy.wait(2000).get(".modal--sm .btn--primary").click()  
    cy.wait(2000).get(".notify-group", {timeout: 60000}).should('be.visible')
    }
)
    
//[remove stamp]
Cypress.Commands.add('deleteStamp', function(){
    cy.wait(2000).get(".enterprise-seal", {timeout: 60000}).should('be.visible') 
    cy.wait(6000).get(".enterprise-seal > section:nth-of-type(1) .btn").click({force:true})
    cy.wait(2000).get(".footer > .btn--danger").click()
    cy.wait(2000).get(".notify-group", {timeout: 60000}).should('be.visible')
    }
)
   
//page user roles
Cypress.Commands.add('pageUserRoles', function(){
    cy.wait(2000).get(".is-visible .balance__amount > .freetext", {timeout: 60000}).should('be.visible').should('have.text', 'Active')
    cy.wait(2000).get("[href='/user-role']").click()
    cy.wait(1000).get(".table-static__body", {timeout: 60000}).should('be.visible')
    }
)

//add employee
Cypress.Commands.add('addEmployee', function(){
    cy.wait(1000).get("[data-e2eid='employee-add']").click()
    cy.wait(2000).get("[placeholder='eg: CH0021']").type(employee.privyID)
    cy.wait(1000).get(".text-link", {timeout: 60000}).should('be.visible')
    cy.wait(1000).get(".dropdown--search-user .dropdown__subitem").click()

    //choose position
    cy.wait(1000).get("[data-e2eid='employee-form-position'] > .input").click()
    cy.wait(1000).get("[data-e2eid='employee-form-position'] button:nth-of-type(1)").click()
    cy.wait(1000).get("[data-e2eid='employee-action-add']").click()
    }
)

//choose roles
Cypress.Commands.add('chooseRoles', function(){
     cy.wait(1000).get(".modal--sm .modal__content", {timeout: 60000}).should('be.visible')
     cy.wait(1000).get("[data-e2eid='manage-role-form-role-PrivySign.Organization.Employee.Admin']").click()
     cy.wait(1000).get("[data-e2eid='manage-role-form-role-PrivySign.Organization.Employee.Sealer']").click()
     cy.wait(1000).get("[data-e2eid='manage-role-form-role-PrivySign.Organization.Employee.Stamper']").click()
     cy.wait(1000).get("[data-e2eid='manage-role-action-apply']").click()
     cy.wait(2000).get(".notify-group", {timeout: 60000}).should('be.visible')
     cy.wait(2000).get(".table-static__body > tr:nth-of-type(1) .flex .flex", {timeout: 60000}).should('be.visible').should('have.text', 'AKU1234')
    }
)    

//delete employee
Cypress.Commands.add('deleteEmployee', function(){
    cy.wait(2000).get(".table-static__body > tr:nth-of-type(1) .btn").click()
    cy.wait(2000).get(".datatable__actions[data-popper-placement='bottom-end'] [data-e2eid='employee-action-delete']").click()
    cy.wait(2000).get(".footer > .btn--primary").click()
    cy.wait(2000).get(".notify-group", {timeout: 60000}).should('be.visible')
    }
)     
    

//Page Payment History
Cypress.Commands.add('pagePaymentHistory', function(){
    cy.wait(3000).get("[href='/payment-history']").click()
 })

 //Detail Payment 
 Cypress.Commands.add('detailPayment', function(){
    cy.get("[data-cell='invoice_number']").click()
    cy.wait(3000).get("//button[@class='btn btn--default btn--variant-solid btn--md w-full']").click()
    
 })

 //Page Position
 Cypress.Commands.add('pagePosition', function(){
    cy.wait(3000).get (".nav--lines > li:nth-of-type(3) .nav__link__label").click()
    
 })

 //Button Add Position
 Cypress.Commands.add('buttonAddPosition', function(){
    cy.xpath("//button[@class='btn btn--primary btn--variant-solid btn--sm flex-shrink-0']").click()
    
 })

 //Input New Position
Cypress.Commands.add('inputNewPosition', function() {
    const randomPosition = `Position ${getRandomNumber(1, 10000)}`; 
    cy.get("[placeholder='Enter position name']").type(randomPosition); 
});

//Input Short Name
Cypress.Commands.add('inputShortNamePosition',function(){
    const randomShortPosition = `Short ${getRandomNumber(1, 10000)}`;
    cy.get("[placeholder='Enter short name']").type(randomShortPosition)
})

//Select Parent Positio
Cypress.Commands.add('selectParentPosition', function (){
    cy.get("[data-e2eid='position-form-parent-position']").click()
    cy.get("[data-e2eid='position-form-parent-position'] button:nth-of-type(1) > .select__option").click();
})

//Choose Department
Cypress.Commands.add('chooseDepartment', function(){
    cy.get("[placeholder='Choose department']").click()
    cy.get("[data-e2eid='position-form-department'] .select__option-text").eq(1).click();
})

//Button Create Position
Cypress.Commands.add('buttonCreatePosition', function(){
    cy.get("[data-e2eid='position-action-create']").click()
})

//Page Department
Cypress.Commands.add('pageDepartment', function(){
    cy.get(".nav--lines > li:nth-of-type(4) > .nav__link").click()

})

//Button add Department
Cypress.Commands.add('buttonAddDepartment', function(){
    cy.get("[data-e2eid='department-create']").click()
})

//Department Name
Cypress.Commands.add('departmentName',function(){
    const randomDepartment = `Department ${getRandomNumber(1, 10000)}`; 
    cy.get("[placeholder='Enter department name']").type(randomDepartment); 
})

//Department Short Name
Cypress.Commands.add('shortnameDepartment', function(){
    const randomShortDepartment = `Short ${getRandomNumber(1, 10000)}`;
    cy.get("[placeholder='Enter short name']").type(randomShortDepartment);
})

// Parent Department
Cypress.Commands.add('parentDepartment', function () {
    cy.get("[placeholder='Select parent department']").click();
    cy.get("[data-e2eid='department-form-parent-department'] .dropdown__item").eq(1).click(); 
  });
  

//Description Departemnt
Cypress.Commands.add('descriptionDepartment', function(){
    const randomDescDepartment = `Description Department ${getRandomNumber(1, 10000)}`;
    cy.xpath("//textarea[@class='textarea__input']").type(randomDescDepartment)
})

//Color Department
Cypress.Commands.add('colorDepartment', function (){
    cy.get("[data-e2eid='department-form-color-#D1007D'] .persona-icon").click()

})

//Button Create Department
Cypress.Commands.add('buttonCreateDepartment', function (){
    cy.get("[data-e2eid='department-action-apply']").click()
})



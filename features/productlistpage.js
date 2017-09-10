import * as basepage from '../../pageObjects/basepage'
import * as productlistpage from '../../pageObjects/productlistpage'

module.exports = function () {
    this.Given(/^I am viewing product list tops$/, basepage.accessParentCategory)
    this.And(/^And I select colour 'Black'$/, productlistpage.filterProducts("Black")) //unsure on the syntax here but I'm assuming I can pass my user input something like this
    this.Then(/^Then Filter button has 1 filter$/, productlistpage.appliedFilterCheck = 1)
    this.And(/^And Filter returns a product list$/), productlistpage.productTableCheck)
}

module.exports = function () {
    this.Given(/^I am viewing product list tops$/, basepage.accessParentCategory)
    this.And(/^I select colour 'White'$/, productlistpage.filterProducts("White")) 
    this.And(/^I select colour 'Black'$/, productlistpage.filterProducts("Black"))
    this.Then(/^Filter button has 2 filter$/, productlistpage.appliedFilterCheck = 2)
    this.And(/^Filter returns a product list$/), productlistpage.productTableCheck)
}

module.exports = function () {
    this.Given(/^I am viewing product list tops$/, basepage.accessParentCategory)
    this.And(/^And I select colour 'White'$/, productlistpage.filterProducts("White"))
    this.And(/^I clear all filters$/, productlistpage.clearFilters)  
    this.Then(/^Then Filter button has no filter$/, productlistpage.appliedFilterCheck = 0)
    this.And(/^And Filter returns a product list$/), productlistpage.productTableCheck)
}
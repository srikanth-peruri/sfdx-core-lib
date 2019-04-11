import Core_baseContainer from 'c/core_baseContainer';
import {api} from 'lwc';

export default class Common_campaignListingContainer extends Core_baseContainer {
    
    @api campaignItemList;

    constructor(){
        super();
        console.log('Common_campaignListingContainer Instantiated sucessfully');
    }
}
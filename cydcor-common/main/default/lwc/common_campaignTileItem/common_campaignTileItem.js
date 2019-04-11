import core_baseComponent from 'c/core_baseComponent';
import {api} from 'lwc';

export default class Common_campaignTileItem extends core_baseComponent {

    @api campaignItem;

    constructor(){
        super('Common_campaignTileItem');
        console.log('Common_campaignTileItem element Instantiated sucessfully');
    }

    openModalBox(){
        const popUpModalComponent = this.template.querySelector('c-core_popup');
        if(popUpModalComponent){
            popUpModalComponent.openmodal();
        }
    }

}
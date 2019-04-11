import { LightningElement, api } from 'lwc';

export default class Core_baseContainer extends LightningElement {

    constructor(){
        super();
        console.log('Core_baseContainer Instantiated sucessfully');
    }
   
    @api
    collectChildComponentsData(){
        console.log('Collecting Data from Child Components...');
        let childComponents = this.template.querySelectorAll(".childComponent");
        if(childComponents){
            childComponents.forEach(child => {
                Object.entries(child.getComponentBody()).forEach(([key, value]) => {
                    console.log(`${key} => ${value}`); 
                });
            });
        }
    }

}
import { LightningElement,api } from 'lwc';

export default class Core_baseComponent extends LightningElement {
    constructor(componentName){
        super();
        this.componentName = componentName;
        console.info('Base Component Instantiated sucessfully');
    }

    componentContextMap = {};

    handleChange(event){
        const key = event.target.name;
        this.componentContextMap[key] = event.target.value;
    }
    
    @api
    getComponentBody(){
        return this.componentContextMap;
    }

    @api 
    getComponentName(){
        return this.componentName;
    }

}
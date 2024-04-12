import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name:'filter'
})
export class FilterPipe implements PipeTransform {
    transform(value:any[], arg:string): any {
        if (!Array.isArray(value)){
            return value;
        }
        if( arg === '' || arg.length < 3 ) return value;
        const resultEntities = [];
        for(const entity of value){
            if(entity.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
                console.log("si")
                resultEntities.push(entity);
            };
        };
        return resultEntities;
    }
}
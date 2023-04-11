import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../models/product.model";

@Pipe({ name: 'sort'})
export class Sort implements PipeTransform {
    transform(products: Product[], order?: any, type?: any): any {
        let desc = !(order && order === 'asc');
        return products.sort((a,b) => {
            if (type=='name') {
                if (desc) return b.title.localeCompare(a.title)
                else return a.title.localeCompare(b.title)
            } else {
                if (desc) return b.dateAdd.getTime() - a.dateAdd.getTime()
                else return a.dateAdd.getTime() - b.dateAdd.getTime()
            }
        });
    }
}

@Pipe({ name: 'search'})
export class SearchPipe implements PipeTransform {
    transform(products: Product[], search: string) : Product[] {
        if (search == '') {
            return products;
        }
        return products.filter((product) => {
            return product.title.toLowerCase().includes(search.toLowerCase());
        })
    }
}

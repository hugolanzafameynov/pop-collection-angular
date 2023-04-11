export class Product {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public imageUrl: string,
        public price: Array<number>,
        public selectedPrice : number,
        public likes: number,
        public isLiked: boolean,
        public dateAdd: Date,
        public size?: Array<string>,
    ) {
    }
}

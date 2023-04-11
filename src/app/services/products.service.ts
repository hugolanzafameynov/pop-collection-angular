import {Injectable} from "@angular/core";
import {Product} from "../models/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    products: Product[] = [
        new Product(
            1,
            "Pikachu",
            "Pikachu est LE pokémon emblématique de la licence. De type Éclectique, ce pokemon a l’apparence d’un petit rongeur jaune qui est référencé comme le 25ème pokémon dans le pokédex, même s’il est très certainement le plus connu de tous !\n\nRusé et méfiant, Pikachu est un pokemon unique. Il lance des décharges de foudre sur ses ennemis lorsqu’il se sent menacé. Inspiré inspiré du pika, un petit rongeur des montagnes d'Amérique du Sud, il vit également dans les montagnes, en groupe et se nourrit de fruits bien qu’à son grand désarroi il soit connu pour griller les baies avec ses éclairs…\n\nPour cette nouvelle figurine de Pikachu, on retrouve un pokemon rieur et joueur ! On reconnaît parfaitement Pikachu, intégralement jaune, avec ses grands yeux noirs, ses pommettes rouges et ses longues oreilles pointues au bout noir.\n\nContrairement aux premières figurines de Pikachu, cette fois-ci Funko l’a représenté se tenant de travers avec les oreilles orientées dans des directions opposées comme s’il était en mouvement ! Enfin, Funko a bien évidemment poussé le détail jusqu’à la représentation de sa queue en forme d’éclair.",
            "https://figurines-pop.com/media/img/figurine/553-figurine-funko-pop-pokemon-pikachu-box.jpg",
            [10, 18, 20],
            10,
            37,
            false,
            new Date(),
            ["S", "L", "XL"]
        ),
        new Product(
            2,
            "Salamèche",
            "Salamèche est le 4ème pokemon de la saga. Funko l’a naturellement représenté en figurine car ce pokemon a une place toute particulière dans l’esprit des fans : il s’agit d’un des 3 pokemons de démarrage.\n\nPokemon de feu, Salamèche est un petit dinosaure/dragon/lézard orange. La flamme au bout de sa queue indique son humeur et est une arme très offensive. Dans le jeu vidéo, Salamèche (de son nom anglais Charmander) évoluera en Reptincel, puis en Dracaufeu.\n\nEn tant que pokemon de la catégorie Feu, Salamèche dispose d’une attaque unique Flamèche, mais il peut également utiliser ces griffes pour blesser ses ennemis.\n\nLa figurine POP de Salamèche représente parfaitement le pokemon : un reptilien orange au bras et jambes très courtes, un ventre jaune, 4 dents aiguisées dans la bouche et 3 griffes aux pâtes. Le détail le plus important n’a pas été omis puisque la figurine dispose d’une petite flamme au bout de la queue de Salamèche !",
            "https://figurines-pop.com/media/img/figurine/455-figurine-funko-pop-pokemon-salameche-box.jpg",
            [10, 18, 20],
            10,
            12,
            false,
            new Date(),
            ["S", "L", "XL"]
        ),
        new Product(
            3,
            "Evoli (diamond glitter)",
            "Pokemon a avoir le plus d’évolutions possibles à cause de son instabilité génétique, Evoli (Eevee en anglais) est un pokemon qui ressemble à un petit chien inspiré du bake danuki dans la mythologie japonaise : un chien pouvant changer d’apparence.\nConnu pour ses talents de fuite et d’adaptabilité, Evoli peut être trouvé à différents endroits par les dresseurs bien qu’il se situe généralement dans les zones urbaines.\nCette figurine POP d’Evoli est la seconde à l’effigie du Pokemon. En effet, Funko propose également une POP où Evoli se tient assis. Celle-ci, en revanche, est plus proche de la posture dans laquelle Funko a aussi représenté les différentes évolution d’Evoli (Aquali, Voltali ou encore Pyroli).\nSur cette POP, on retrouve l’allure canine d’Evoli. Il se tient sur ses quatre pattes et arbore un large sourire, la bouche ouverte laissant entrevoir sa langue. On retrouve le museau attachant du petit Pokemon, ses grandes oreilles pointues, son pelage et sa fourrure de couleur crème au niveau du torse et du bout de sa queue.",
            "https://figurines-pop.com/media/img/figurine/626-figurine-funko-pop-pokemon-eevee-diamond-glitter-box.jpg",
            [15, 25, 35],
            15,
            26,
            false,
            new Date(),
            ["XS", "M", "XXL"]
        ),
    ];

    getAllProducts() : Product[] {
        return this.products;
    }

    getOneProducts(id: number): Product | null {
        let res = this.products.at(id);
        if (res) {
            return res;
        } else {
            return null;
        }

    }

    onLikeProduct(product: Product): void {
        if (product.isLiked) {
            product.likes--;
        } else {
            product.likes++;
        }
        product.isLiked = !product.isLiked;
    }
}

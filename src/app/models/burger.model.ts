export interface IBurger 
{
    nom: string,
    image: string,
    prix:number
}
export interface IMenu {
  nom:string,
  image: string, 
  burger: IBurger[],
  prix: number;
}

export interface ICatalogue{
  menus: IMenu[],
  burgers: IBurger[],
};

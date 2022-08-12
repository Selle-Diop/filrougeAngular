export interface IBurgers {
  id: number;
  nom: string;
  image: string;
  prix: number;
  quantite: number;
}
export interface IMenus {
  id: number;
  nom: string;
  image: string;
  burger: IBurgers[];
  frites: IFrites[];
  boisson: ITailles[];
  prix: number;
  quantite: number;
}
export interface IFrites {
  id: number;
  nom: string;
  quantite: number;
}

export interface ITailles {
  id: number;
  taille: string;
  quantite: number;
}
export interface IProduit {
  menus: IMenus[];
  burgers: IBurgers[];
}
// -------------------------------------Interfaces Commande--------------------------------
export interface ILineCommand {
  quantite: number;
  produit: string;
}
export interface IPro {
  quantite: number;
  produit: IProduits;
}
export interface ICommande {
  Produits: ILineCommand[];
  zone: string;
  client: string;
}

// -------------------------------------Interfaces Client--------------------------------
export interface IProduits {
  id: number;
  nom: string;
  image: string;
  prix: number;
  quantite: number;
}
export interface IClient {
  id: number;
  nom: string;
  telephone: number;
  nomComplet: string;
  email: string;
  commandes: IGetCommande[];
}
export interface IGetCommande {
  id: number;
  numCommande: string;
  isEtatCommande: string;
  client: IClient;
  dateCommande: Date;
  zone: IZone;
  email: string;
  Produits: IPro[];
}
export interface IZone {
  id: number;
  nomZone: string;
}
// ----------------------------------Zone-----
export interface IZones {
  id: number;
  nomZone: string;
  commandes: ICommandeZone[];
}
export interface ICommandeZone {
  id: number;
  numCommande: string;
  isEtatCommande: string;
}
// ------------------------------Livraisons--------------------------------

export interface ILivraison {
  livreur: string;
  commandes: string[];
  zones: string[];
}
export interface ILivreur {
  id: number;
  matricule: string;
  telephone: number;
  nomComplet: string;
  isEtatLivreur: string;
  livraisons: string[];
}

//   portion: IFrite[];
//   taille: ITaille[];
// }
// -------------------------Complements------------------------
// export interface IComple {
//   portion: IFrite[];
//   taille: ITaille[];
// }
// export interface ITaille {
//   id: number;
//   libelle: string;
//   boissTaille: [];
// }
// export interface boissTaille {
//   id: number;
//   stock: number;
//   boisson: string;
// }
// export interface IFrite {
//   id: number;
//   nom: string;
//   portions: string;
//   prix: number;
//   image: string;
// }

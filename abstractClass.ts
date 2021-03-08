export class Abstractos {
  private id: string;
  private abstract: string[];

  constructor();

  constructor(id?: string, abstracto?: string[]) {
    this.id = id;
    this.abstract = abstracto;
  }

  getId(): string {
    return this.id;
  }
  /*
 public getAbstracto() {
    console.log(this.abstract);
  }
  setId(id: string) {
    this.id = id;
  }
  setAbstract(abstracto: string[]) {
    this.abstracto = abstracto;
  } */
}

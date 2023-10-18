export class Notes{

  _id?: number;
  title: string;
  description: string;
  name: string;
  date: Date;

  constructor(title: string, description: string, name: string,date: Date){
      this.title=title;
      this.description= description;
      this.name= name;
      this.date=date;
  }
}

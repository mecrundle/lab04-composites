interface IDomElement {
  print();
}

class DomElement implements IDomElement {
  type:string;
  text:string;
  elementArray: IDomElement[];
  constructor(type:string, text?:string) {
    this.type = type;
    this.text= text;
    this.elementArray = [];
  }

  addElement(element: IDomElement) {
    this.elementArray.push(element);
  }

  print() {
    console.log(this.type);
    console.log(this.text);
    //
  }
}

//leaf in tree
class TextNode implements IDomElement {
  text: string;
  constructor(text:string) {
    this.text = text;
  }
  print() {
  console.log(this.text);
  }
}

let p1 = new DomElement("<p>");
let div = new DomElement("div");

p1.addElement(new TextNode("textnode testing!"));

div.addElement(p1);

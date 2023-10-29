type Observer = (data:string) => void


class Observable {
  observers: Observer[];
  constructor() {
    this.observers = [];
  }

  subscribe(func: Observer ):void {
    this.observers.push(func);
  }

  unsubscribe(func: Observer):void {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data:string):void {
    this.observers.forEach((observer) => observer(data));
  }
}



export default new Observable
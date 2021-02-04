export class LibDemo {
  public addHello(target: HTMLElement) {
    const helloBox = document.createElement('div');
    helloBox.innerHTML = 'Hello!';
    target.appendChild(helloBox);
  }
}
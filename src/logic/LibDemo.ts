export class LibDemo {
  public addHello(target: HTMLElement): void {
    const helloBox = document.createElement('div');
    helloBox.innerHTML = 'Hello!';
    // test comment
    target.appendChild(helloBox);
  }
}

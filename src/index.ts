export default class LibDemo {
  public addHello() {
    const helloBox = document.createElement('div');
    helloBox.innerHTML = 'Hello!';
    document.body.appendChild(helloBox);
  }
}
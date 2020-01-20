export decorator @_(f) {
  @register((target, name) => {
    let description = Object.getOwnPropertyDescriptor(target, name);
    description = f(target, name, description) ?? description;
    Object.defineProperty(target, name, description);
  })
}

const faker = require("faker");

class Usuario {
  constructor() {
    this._carne = faker.datatype.uuid();
    this.primerNombre = faker.name.firstName();
    this.apellido = faker.name.lastName();
    this.tel = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.contraseña = faker.internet.password();
  }
}

module.exports = Usuario;

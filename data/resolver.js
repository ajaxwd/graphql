class Cliente {
    constructor(id, { nombre, apellido, empresa, email, edad, tipo }) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.empresa = empresa;
        this.email = email;
        this.edad = edad;
        this.tipo = tipo;
    }
}

const ClienteDB = {};

export const resolvers = {
    Query: {
        getCliente: ({ id }) => {
            return new Cliente(id, ClienteDB[id]);
        },
    },
    Mutation: {
        Clienteinput: ({ input }) => {
            const id = require('crypto').randomBytes(10).toString('hex');
            ClienteDB[id] = input;
            return new Cliente(id, input);
        }
    }
};
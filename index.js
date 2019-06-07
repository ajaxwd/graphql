import express from 'express';
//graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema.js';
//revolvers
import resolvers from './resolver';

const root = resolvers;
const app = express();

app.get('/', (req, res) => {
    res.send('Todo listo');
});


app.use('/graphql', graphqlHTTP({
    //schema que se va utilizar
    schema,
    //el resolver se pasa como rootValue
    rootValue: root,
    //utilizar graphiql
    graphiql: true
}));

app.listen(8000, () => console.log('El servidor esta funcionando'));
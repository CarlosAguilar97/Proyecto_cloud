module.exports = async function (context, req) {
    
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? `<html><body><h1>Hello, ${name}. Mi primer proyecto Function App</h1></body></html>`
        : `<html><body><h1>Hola mundo , Carlos Aguilar</h1></body></html>`;

    context.res = {
        status: 200,
        headers: {
            'Content-Type': 'text/html'
        },
        body: responseMessage
    };
};

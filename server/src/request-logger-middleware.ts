import express from 'express';
 
const requestLoggerMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
console.info(`${req.method} ${req.originalUrl}`);
 
const start = new Date().getTime();
res.on('finish', () => {
const elapsed = new Date().getTime() - start;
const msg = `method: ${req.method} url: ${req.originalUrl} body: ${JSON.stringify(req.body)} statuscode: ${res.statusCode} elapsed: ${elapsed}ms`;
console.info(msg);
});
next();
}
 
export { requestLoggerMiddleware };
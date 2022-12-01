import url from 'url'

const address = 'https://www.meusite.com.br/catalogo?produtos=cadeira';
const parsedUrl = new url.URL(address);
const log = console.log

log(parsedUrl.host)
log(parsedUrl.pathname)
log(parsedUrl.search)
log(parsedUrl.searchParams)
log(parsedUrl.searchParams.get('produtos'))

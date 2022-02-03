const dns = require ('dns');

try {
dns.reverse('mosixpsalmscom', (err,value) => {
       
    console.log(value);
});
} catch (err) {
    console.log(err);
}
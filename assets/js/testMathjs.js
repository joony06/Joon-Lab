import { create, all } from 'mathjs'

const config = { };
const math = create(all, config);

console.log(math.sqrt(-4).toString());
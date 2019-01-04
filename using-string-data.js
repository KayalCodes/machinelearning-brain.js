const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const training = data.map(item =>({
    input : item.text,
    output : item.category
}));

network.train(training,{
    iterations:2000
});

const output = network.run('I have some bugs on my code');

console.log(`category : ${output}`);

const terminalCommands = require('./terminal-commands');

terminalCommands.ls();
terminalCommands.touch('hello.txt', 'hello world!');
terminalCommands.mkdir('newFolder');
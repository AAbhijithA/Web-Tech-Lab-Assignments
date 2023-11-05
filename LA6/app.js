const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('             --------------------------------------------------------------------Simple Web-Server with NodeJS--------------------------------------------------------------------\n\n\
                        This is a simple NodeJs Web-Server using http. Want to do it yourself? Follow the steps below :)\n\n\
                            1) Install NodeJS from here: \'https://nodejs.org/en/download\' \n\
                            2) Run the following commands in your terminal:\n\
                                > mkdir (folder_name)\n\
                                > cd (folder_name)\n\
                                > npm init -y\n\
                            3) Make an app.js file and use the starter code from NodeJs Docs given here: \'https://nodejs.dev/en/learn/introduction-to-nodejs/\' \n\
                            4) Run the command below: \n\
                                > node app.js \n\
                            5) Open \'http://127.0.0.1:3000/\' in your browser to see the output\n\
                            6) Congratulations you made your first NodeJs Web-Server\
    ');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
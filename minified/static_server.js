var static=require("node-static"),fileServer=new static.Server("./");console.log("Visit http://localhost:8080/test.html"),require("http").createServer(function(e,t){e.addListener("end",function(){fileServer.serve(e,t)}).resume()}).listen(8080);
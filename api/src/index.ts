import server from "./app"

server.listen(server.get("port"), () => {
    console.log(`Server on ${server.get("port")}`)
})
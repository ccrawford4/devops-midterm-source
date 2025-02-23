package main

import (
	"github.com/gin-gonic/gin"
	"go.mod/backend/db"
	"go.mod/backend/routes"
	"log"
)

func main() {
	r := gin.Default()
	db.ConnectDatabase()

	routes.RegisterRoutes(r)

	log.Println("Starting server on port 8080...")
	if err := r.Run(":8080"); err != nil {
		log.Fatal(err)
	}
}

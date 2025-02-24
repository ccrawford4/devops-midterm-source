package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"go.mod/v2/db"
	"go.mod/v2/routes"
	"log"
)

func main() {
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowMethods: []string{"*"},
		AllowHeaders: []string{"*"},
	}))
	db.ConnectDatabase()

	routes.RegisterRoutes(r)

	log.Println("Starting server on port 8080...")
	if err := r.Run(":8080"); err != nil {
		log.Fatal(err)
	}
}

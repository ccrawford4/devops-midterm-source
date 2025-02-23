package routes

import (
	"github.com/gin-gonic/gin"
	"go.mod/v2/handlers"
)

func RegisterRoutes(r *gin.Engine) {
	r.GET("/restaurants", handlers.GetRestaurants)
	r.GET("/restaurants/:id", handlers.GetRestaurant)
	r.POST("/restaurants", handlers.CreateRestaurant)
	r.PUT("/restaurants/:id", handlers.UpdateRestaurant)
	r.DELETE("/restaurants/:id", handlers.DeleteRestaurant)
}

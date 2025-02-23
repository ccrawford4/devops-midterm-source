package db

import (
	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	"go.mod/v2/models"
	"log"
	"os"
)

var DB *gorm.DB

func ConnectDatabase() {
	var err error
	dsn := os.Getenv("DB_DSN")
	DB, err = gorm.Open("mysql", dsn)
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}
	DB.AutoMigrate(&models.Restaurant{})
}

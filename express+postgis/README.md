create the folder:
	express+postgis/persistance

For connection from express (I recommend knexjs):
	connection: {
      database: 'your_database',
      user:     'postgres',
      password: 'password',
      port: '5432',
      host: 'postgis_gis'
    }

To run:
	docker-compose up
or detached mode:
	docker-compose up -d
package com.todo.rest.restfulwebservices;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.Date;

@Configuration
public class ToDoPreloader {
	private static final Logger log = LoggerFactory.getLogger(ToDoPreloader.class);
	
	@Bean
	CommandLineRunner initDatabase(ToDoRepository repository) {
		return args -> {
			log.info("Preloading " + repository.save(new
					ToDo("Add More To-Dos", new Date(), "Incomplete")));
		};
	}
}

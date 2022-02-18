package com.todo.rest.restfulwebservices;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/todos")
@CrossOrigin(origins="http://localhost:3000")
public class ToDoController {
	@Autowired
	private ToDoRepository toDoRepository;
	
	public ToDoController(ToDoRepository toDoRepository) {
        this.toDoRepository = toDoRepository;
    }
	
	@GetMapping
	List<ToDo> getAll() {
		return toDoRepository.findAll();
	}
	
	@GetMapping("/{id}")
	ToDo getToDo(@PathVariable Long id) {
		return toDoRepository.findById(id).orElseThrow(() -> new ToDoNotFoundException(id));
	}
	
	@PostMapping
	public ResponseEntity<ToDo> createToDo(@RequestBody ToDo newToDo) throws
	URISyntaxException {
		ToDo createdTodo = toDoRepository.save(newToDo);
		return ResponseEntity.created(new URI("/todos/"
				+ createdTodo.getId())).body(createdTodo);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<ToDo> updateToDo(@RequestBody ToDo newToDo, @PathVariable Long id) {
		ToDo currToDo = toDoRepository.findById(id).orElseThrow(() -> new ToDoNotFoundException(id));
		currToDo = toDoRepository.save(newToDo);
		return new ResponseEntity<ToDo>(currToDo, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteToDo(@PathVariable Long id) {
		toDoRepository.deleteById(id);
		return ResponseEntity.ok().build();
	}
}

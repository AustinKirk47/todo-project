package com.todo.rest.restfulwebservices;

public class ToDoNotFoundException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 2181686657467310151L;

	ToDoNotFoundException(Long id) {
		super("Could not find to-do " + id);
	}
}

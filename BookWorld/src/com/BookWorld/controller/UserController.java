package com.BookWorld.controller;

import java.io.UnsupportedEncodingException;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.codehaus.jettison.json.JSONObject;

import com.BookWorld.model.User;
import com.BookWorld.service.UserService;
import com.BookWorld.service.UserServiceImpl;

@Path("/user")
public class UserController {
	UserService userService = new UserServiceImpl();

	@Path("/auth")
	@POST
	@Produces("application/json")
	public User authUserByEmail(User userEnteredCredentials) throws Exception {
		String email = userEnteredCredentials.getEmail();
		String pwd = userEnteredCredentials.getPwd();

		return userService.findUserByEmail(email, pwd);

		
		//return userService.addUser(user);
	}

	// The add service is called in order to Add the new user
	@Path("/add")
	@POST
	@Produces("application/json")
	public String addUser(User user) throws UnsupportedEncodingException {

		return userService.addUser(user);
	}
}

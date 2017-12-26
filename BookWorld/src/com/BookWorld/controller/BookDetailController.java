package com.BookWorld.controller;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import com.BookWorld.model.BookDetail;
import com.BookWorld.service.BookDetailService;
import com.BookWorld.service.BookDetailServiceImpl;

@Path("/bookDetail")
public class BookDetailController {

	BookDetailService bookDetailService = new BookDetailServiceImpl();

	@Path("/getAllBookDetails")
	@GET
	@Produces("application/json")
	public List<BookDetail> getAllBookDetails() {
		return bookDetailService.getAllBookDetails();

	}
	
	@Path("/getBookDetailBycategoryId")
	@GET
	@Produces("application/json")
	public List<BookDetail> getBookDetailBycategoryId(@QueryParam("categoryId") int categoryId ) 
	{
	return bookDetailService.getBookDetailBycategoryId(categoryId);
	}

	@Path("/getBookDetailById")
	@GET
	@Produces("application/json")
	public BookDetail getBookDetailById(@QueryParam("bookId") int bookid) {
		return bookDetailService.getBookDetailById(bookid);
	}

}

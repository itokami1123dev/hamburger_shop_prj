/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.hum.service;

import com.example.hum.entity.Menuitems;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

/**
 *
 * @author ehara
 */
@Stateless
@Path("com.example.hum.entity.menuitems")
public class MenuitemsFacadeREST extends AbstractFacade<Menuitems> {
	@PersistenceContext(unitName = "hamburger_shop_prjPU")
	private EntityManager em;

	public MenuitemsFacadeREST() {
		super(Menuitems.class);
	}

	@POST
    @Override
    @Consumes({"application/json"})
    @Produces({"application/json"})
	public Menuitems create(Menuitems entity) {
		super.create(entity);
		return entity;
	}

	@PUT
    @Override
    @Path("{id}")
    @Consumes({ "application/json"})
	public void edit(Menuitems entity) {
		super.edit(entity);
	}

	@DELETE
    @Path("{id}")
	public void remove(@PathParam("id") Integer id) {
		super.remove(super.find(id));
	}

	@GET
    @Path("{id}")
    @Produces({"application/json"})
	public Menuitems find(@PathParam("id") Integer id) {
		return super.find(id);
	}

	@GET
    @Override
    @Produces({"application/json"})
	public List<Menuitems> findAll() {
		return super.findAll();
	}

	@GET
    @Path("{from}/{to}")
    @Produces({"application/json"})
	public List<Menuitems> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
		return super.findRange(new int[]{from, to});
	}

	@GET
    @Path("count")
    @Produces("text/plain")
	public String countREST() {
		return String.valueOf(super.count());
	}

	@Override
	protected EntityManager getEntityManager() {
		return em;
	}
	
}

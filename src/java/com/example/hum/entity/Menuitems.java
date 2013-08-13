package com.example.hum.entity;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "menuitems")
@XmlRootElement
@NamedQueries({
	@NamedQuery(name = "Menuitems.findAll", query = "SELECT m FROM Menuitems m"),
	@NamedQuery(name = "Menuitems.findById", query = "SELECT m FROM Menuitems m WHERE m.id = :id"),
	@NamedQuery(name = "Menuitems.findByName", query = "SELECT m FROM Menuitems m WHERE m.name = :name"),
	@NamedQuery(name = "Menuitems.findByPrice", query = "SELECT m FROM Menuitems m WHERE m.price = :price"),
	@NamedQuery(name = "Menuitems.findBySelected", query = "SELECT m FROM Menuitems m WHERE m.selected = :selected")})
public class Menuitems implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
	private Integer id;
	@Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 30)
    @Column(name = "name")
	private String name;
	@Basic(optional = false)
    @NotNull
    @Column(name = "price")
	private long price;
	@Basic(optional = false)
    @NotNull
    @Column(name = "selected")
	private boolean selected;

	public Menuitems() {
	}

	public Menuitems(Integer id) {
		this.id = id;
	}

	public Menuitems(Integer id, String name, long price, boolean selected) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.selected = selected;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}

	public boolean getSelected() {
		return selected;
	}

	public void setSelected(boolean selected) {
		this.selected = selected;
	}

	@Override
	public int hashCode() {
		int hash = 0;
		hash += (id != null ? id.hashCode() : 0);
		return hash;
	}

	@Override
	public boolean equals(Object object) {
		// TODO: Warning - this method won't work in the case the id fields are not set
		if (!(object instanceof Menuitems)) {
			return false;
		}
		Menuitems other = (Menuitems) object;
		if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
			return false;
		}
		return true;
	}

	@Override
	public String toString() {
		return "com.example.hum.entity.Menuitems[ id=" + id + " ]";
	}
	
}

package br.com.john.myinvest.domain;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity //fala que é uma entidade
public class Investimento {
	
	@Id //pq é id dessa tabela
	@GeneratedValue(strategy = GenerationType.IDENTITY) //gera automatico o valor do id incrementado
	private Long codigo; //chave primaria
	
	private  String codigoArtigo;
	
	private Double valorNaCota; //double pq é do tipo flutuante
	
	private Integer quantidadeCotas;
	
	private  LocalDate dataCompra; //biblioteca do java que é própria de data
	
 //Muitos para um . abaixo um objeto do tipo categoria
 //cada categoria pode ter mais de investimento
 @ManyToOne
 @JoinColumn(name="fk_codigo_categoria") //dou um nome pra esse join
 private Categoria categoria;//demos um nome pra seu elemento Categorai do tipo categoria
//fk = foreinkey chave secundaria vai representar o código de categoria
	
	//vamos gerar o getter = recuperar e setters = gerar valor

	public Long getCodigo() {
		return codigo;
	}
 public Categoria getCategoria() {
		return categoria;
	}
	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
	//verificar se um objeto é igual ao outro e comparar 

	

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((categoria == null) ? 0 : categoria.hashCode());
		result = prime * result + ((codigo == null) ? 0 : codigo.hashCode());
		result = prime * result + ((codigoArtigo == null) ? 0 : codigoArtigo.hashCode());
		result = prime * result + ((dataCompra == null) ? 0 : dataCompra.hashCode());
		result = prime * result + ((quantidadeCotas == null) ? 0 : quantidadeCotas.hashCode());
		result = prime * result + ((valorNaCota == null) ? 0 : valorNaCota.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Investimento other = (Investimento) obj;
		if (categoria == null) {
			if (other.categoria != null)
				return false;
		} else if (!categoria.equals(other.categoria))
			return false;
		if (codigo == null) {
			if (other.codigo != null)
				return false;
		} else if (!codigo.equals(other.codigo))
			return false;
		if (codigoArtigo == null) {
			if (other.codigoArtigo != null)
				return false;
		} else if (!codigoArtigo.equals(other.codigoArtigo))
			return false;
		if (dataCompra == null) {
			if (other.dataCompra != null)
				return false;
		} else if (!dataCompra.equals(other.dataCompra))
			return false;
		if (quantidadeCotas == null) {
			if (other.quantidadeCotas != null)
				return false;
		} else if (!quantidadeCotas.equals(other.quantidadeCotas))
			return false;
		if (valorNaCota == null) {
			if (other.valorNaCota != null)
				return false;
		} else if (!valorNaCota.equals(other.valorNaCota))
			return false;
		return true;
	}
	public String getCodigoArtigo() {
		return codigoArtigo;
	}

	public void setCodigoArtigo(String codigoArtigo) {
		this.codigoArtigo = codigoArtigo;
	}

	public Double getValorNaCota() {
		return valorNaCota;
	}

	public void setValorNaCota(Double valorNaCota) {
		this.valorNaCota = valorNaCota;
	}

	public Integer getQuantidadeCotas() {
		return quantidadeCotas;
	}

	public void setQuantidadeCotas(Integer quantidadeCotas) {
		this.quantidadeCotas = quantidadeCotas;
	}

	public LocalDate getDataCompra() {
		return dataCompra;
	}

	public void setDataCompra(LocalDate dataCompra) {
		this.dataCompra = dataCompra;
	}
	
	
	
	

}

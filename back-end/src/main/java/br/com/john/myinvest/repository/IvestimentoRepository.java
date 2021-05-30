package br.com.john.myinvest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.john.myinvest.domain.Investimento;

public interface IvestimentoRepository extends JpaRepository<Investimento, Long> {
	
	//depois disso podemos ultilizar os méotodo basicos de crud , pronto pra fazer
	//as regras de négocios ou métodos http de criação etc nos services
}

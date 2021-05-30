package br.com.john.myinvest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.john.myinvest.domain.Categoria;

//interface do repositorio pra extendemos as entidade acessar o banco de dados
//fazer consulta ao banco de dados
public interface CategoriaRepository extends JpaRepository<Categoria, Long> {


}
/*ela vai herdar se exenter a JpaRepository, que é uma interface , pra fazer consulta ao
banco de dados sem nenuma linha sql , é representada pela classe Classe categoria e seu id
que é a chave primaria é o long , agora temos varios métodos que faz consulta ao banco
salvar remover deletar buscar*/

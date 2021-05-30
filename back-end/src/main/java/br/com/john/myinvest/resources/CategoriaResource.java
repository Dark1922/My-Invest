package br.com.john.myinvest.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.john.myinvest.domain.Categoria;
import br.com.john.myinvest.repository.CategoriaRepository;


//RESOURCE = MÉTODOS QUE VÃO SER NECESSARIOS PARA API
@RestController // controlador rest
@RequestMapping("/categorias") //está mapeando uma requisição
public class CategoriaResource {

	@Autowired //para que o spring fassa essa injeção de dependencia abaixo
	private CategoriaRepository categoriaRepository; //instacia o repository
	
	@GetMapping //get de buscar lista , se n passar nd na rota vai cair no listarTodos
	List<Categoria> listarTodos(){//n vai receber nenhum parametro aqui ent só fecha
		   return categoriaRepository.findAll();// encontre todos elemento que existem
	}  
	
	//@PathVariable pra fazer busca de um codigo especifíco endipoint
	@GetMapping("/{codigo}") //vai ser / o código que foi passado
	public Categoria buscarPeloCodigo(@PathVariable Long codigo) {
		return categoriaRepository.findById(codigo).orElse(null);
	//orElse caso ele n encontrar o codigo passado ele tem que fazer alguma coisa
   //retorna nulo 	
	}
	
	@DeleteMapping //deletar o mapping
	public  void remover(@PathVariable Long codigo) { //vai retornar nada void
		categoriaRepository.deleteById(codigo);
		//vai remover o id passado
	}
	
	//requisiçao do corpo
	@PostMapping
	public Categoria cadastrar(@RequestBody Categoria categoria) {
		return categoriaRepository.save(categoria); //vamo salvar o investimento
		//que foi passado por parametro
		
	}
	

}

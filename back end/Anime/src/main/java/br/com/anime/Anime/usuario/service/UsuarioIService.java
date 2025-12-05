package br.com.anime.Anime.usuario.service;

import br.com.anime.Anime.usuario.entity.Usuario;
import java.util.List;

public interface UsuarioIService {

    List<Usuario> findAll();

    Usuario save(Usuario usuario);

    Usuario update(Usuario usuario);

    void delete(Long id);

    Usuario findById(Long id);
}

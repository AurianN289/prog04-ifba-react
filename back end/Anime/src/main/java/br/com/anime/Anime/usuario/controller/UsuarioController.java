/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package br.com.anime.Anime.usuario.controller;

import br.com.anime.Anime.usuario.entity.Usuario;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import br.com.anime.Anime.usuario.service.UsuarioIService;
/**
 *
 * @author aurian
 */
@Controller
@RequiredArgsConstructor
public class UsuarioController implements UsuarioIController{
    private final UsuarioIController usuarioIController;
    
    @Override
    public List<Usuario> findAll() {
        return usuarioIController.findAll();
    }

    @Override
    public void save(Usuario usuario) {
        usuarioIController.save(usuario);
    }

    @Override
    public void update(Usuario usuario) {
        alunoIService.update(usuario);
    }

    @Override
    public void delete(Usuario usuario) {
        alunoIService.delete(usuario); 
    }

    @Override
    public Aluno findById(Long id) throws RuntimeException {
        return UsuarioIService.findById(id);
    }
}

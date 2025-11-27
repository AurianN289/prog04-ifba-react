/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */

package br.com.anime.Anime.usuario.controller;

import br.com.anime.Anime.usuario.entity.Usuario;
import java.util.List;
/**
 *
 * @author aurian
 */
public interface UsuarioIController {
    public abstract List<Usuario> findAll();
    public abstract void save(Usuario usuario);
    public abstract void update(Usuario usuario);
    public abstract void delete(Usuario usuario);
    public abstract Usuario findById(Long id) throws RuntimeException;
}

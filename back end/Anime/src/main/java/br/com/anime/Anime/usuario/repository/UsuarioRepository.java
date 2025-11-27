/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */

package br.com.anime.Anime.usuario.repository;

import br.com.anime.Anime.usuario.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
/**
 *
 * @author aurian
 */
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}

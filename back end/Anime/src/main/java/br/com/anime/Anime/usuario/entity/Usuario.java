

package br.com.anime.Anime.usuario.entity;

import br.com.anime.Anime.infrastructure.entity.PersistenceEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import java.io.Serializable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 *
 * @author aurian
 */

@Entity 
@Table(name = "usuario") 
@NoArgsConstructor
public class Usuario extends PersistenceEntity implements Serializable {
    
    @Column(name = "nome", nullable = false)
    @NotBlank(message = "O nome é obrigatório")
    @Getter @Setter private String nome;
    
    @Column(name = "email", nullable = false)
    @Email(message = "E-mail inválido")
    @NotBlank(message = "O e-mail é obrigatório")
    @Getter @Setter private String email;
    
}

package br.com.anime.Anime;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class AnimeApplication {

	public static void main(String[] args) {
            System.setProperty("java.awt.headless", "false");
            SpringApplication.run(AnimeApplication.class, args);
            
	}

}

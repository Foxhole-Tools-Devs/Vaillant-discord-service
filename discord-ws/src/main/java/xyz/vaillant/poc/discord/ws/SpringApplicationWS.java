package xyz.vaillant.poc.discord.ws;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("xyz.vaillant.poc.discord")
public class SpringApplicationWS {

    public static void main(String[] args) {
        SpringApplication.run(SpringApplicationWS.class, args);
    }
}

package xyz.vaillant.poc.discord.bot.config;

import discord4j.core.DiscordClientBuilder;
import discord4j.core.GatewayDiscordClient;
import discord4j.core.event.domain.Event;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import xyz.vaillant.poc.discord.bot.event.EventListener;

import java.util.List;


@Slf4j
@Configuration
public class BotConfiguration {

    @Value("${discord.token}")
    private String token;

    @Bean
    public <T extends Event>GatewayDiscordClient gatewayDiscordClient(List<EventListener<T>> eventListeners) {
        GatewayDiscordClient client = null;

        try {
            client = DiscordClientBuilder.create(token)
                    .build()
                    .login()
                    .block();

            for(EventListener<T> listener : eventListeners) {
                client.on(listener.getEventType())
                        .flatMap(listener::execute)
                        .onErrorResume(listener::handleError)
                        .subscribe();
            }
        } catch (Exception exception) {
            log.error( "Be sure to use a valid bot token!", exception );
        }

        return client;
    }
}

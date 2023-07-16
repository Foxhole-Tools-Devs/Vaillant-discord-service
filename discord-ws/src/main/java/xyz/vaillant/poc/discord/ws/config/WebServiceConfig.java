package xyz.vaillant.poc.discord.ws.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import xyz.vaillant.poc.discord.bot.config.BotConfiguration;
import xyz.vaillant.poc.discord.core.config.CoreConfig;

@Configuration
@Import({CoreConfig.class, BotConfiguration.class})
public class WebServiceConfig {
}

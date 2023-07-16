package xyz.vaillant.poc.discord.bot.service;

import discord4j.common.util.Snowflake;
import discord4j.core.GatewayDiscordClient;
import discord4j.core.object.entity.Guild;
import discord4j.core.object.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GuildService {

    private final GatewayDiscordClient gatewayDiscordClient;

    public Guild getGuildFromId(Snowflake guildId) {
        return gatewayDiscordClient.getGuildById(guildId).block();
    }

    public List<Member> getGuildMembers(Snowflake guildId) {
        Guild guild = gatewayDiscordClient.getGuildById(guildId).block();

        if (guild == null) {
            return null;
        }

        return guild.getMembers().collectList().block();
    }
}

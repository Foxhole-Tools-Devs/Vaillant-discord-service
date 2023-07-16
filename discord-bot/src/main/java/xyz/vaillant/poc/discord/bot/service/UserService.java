package xyz.vaillant.poc.discord.bot.service;

import discord4j.common.util.Snowflake;
import discord4j.core.GatewayDiscordClient;
import discord4j.core.object.entity.Guild;
import discord4j.core.object.entity.Member;
import discord4j.rest.util.Image;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import xyz.vaillant.poc.discord.bot.model.GuildMember;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final GatewayDiscordClient gatewayDiscordClient;

    public List<GuildMember> getUsersGuildsMembers(final Long userId) {
        List<Guild> guilds = gatewayDiscordClient.getGuilds().collectList().block();

        if (guilds == null) {
            return null;
        }

        List<GuildMember> userMembers = new ArrayList<>();
        guilds.forEach(
                guild -> {
                    Member member = guild.getMemberById(Snowflake.of(userId)).block();

                    GuildMember guildMember = new GuildMember();
                    guildMember.setMember(member);
                    guildMember.setId(guild.getId().asLong());
                    guildMember.setLogo(guild.getIconUrl(Image.Format.WEB_P).orElse(null));
                    guildMember.setName(guild.getName());

                    userMembers.add(guildMember);
                }
        );

        return userMembers;
    }
}

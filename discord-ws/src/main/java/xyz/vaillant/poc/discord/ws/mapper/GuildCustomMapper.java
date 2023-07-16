package xyz.vaillant.poc.discord.ws.mapper;

import discord4j.core.object.entity.Guild;
import xyz.vaillant.poc.discord.core.dto.GuildDCDto;

import java.util.List;

public interface GuildCustomMapper {
    GuildDCDto toGuildDto(Guild guild);

    List<GuildDCDto> toGuildListDto(List<Guild> guilds);
}

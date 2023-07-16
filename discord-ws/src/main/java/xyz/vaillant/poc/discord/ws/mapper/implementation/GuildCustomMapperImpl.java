package xyz.vaillant.poc.discord.ws.mapper.implementation;

import discord4j.core.object.entity.Guild;
import discord4j.rest.util.Image;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import xyz.vaillant.poc.discord.core.dto.GuildDCDto;
import xyz.vaillant.poc.discord.ws.mapper.GuildCustomMapper;
import xyz.vaillant.poc.discord.ws.mapper.GuildRoleCustomMapper;

import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class GuildCustomMapperImpl implements GuildCustomMapper {

    private final GuildRoleCustomMapper guildRoleCustomMapper;

    @Override
    public GuildDCDto toGuildDto(Guild guild) {
        GuildDCDto guildDto = new GuildDCDto();

        guildDto.setId(guild.getId().asLong());
        guildDto.setName(guild.getName());
        Optional<String> iconUrl = guild.getIconUrl(Image.Format.WEB_P);
        guildDto.setIcon(iconUrl.orElse(null));
        guildDto.setRoles(guildRoleCustomMapper.toListRoleDCDto(guild.getRoles().collectList().block()));

        return guildDto;
    }

    @Override
    public List<GuildDCDto> toGuildListDto(List<Guild> guilds) {
        return guilds.stream().map(this::toGuildDto).toList();
    }
}

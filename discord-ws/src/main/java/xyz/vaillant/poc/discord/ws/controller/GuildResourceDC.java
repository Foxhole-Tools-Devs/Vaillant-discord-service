package xyz.vaillant.poc.discord.ws.controller;

import discord4j.common.util.Snowflake;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;
import xyz.vaillant.poc.discord.bot.service.GuildService;
import xyz.vaillant.poc.discord.core.api.GuildDCApi;
import xyz.vaillant.poc.discord.core.dto.GuildDCDto;
import xyz.vaillant.poc.discord.core.dto.MemberDCDto;
import xyz.vaillant.poc.discord.ws.mapper.GuildCustomMapper;
import xyz.vaillant.poc.discord.ws.mapper.GuildMemberCustomMapper;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class GuildResourceDC implements GuildDCApi {

    private final GuildService guildService;

    private final GuildCustomMapper guildMapper;

    private final GuildMemberCustomMapper guildMemberCustomMapper;

    @Override
    public GuildDCDto getGuildGlobalInformation(Long guildId) {
        return guildMapper.toGuildDto(guildService.getGuildFromId(Snowflake.of(guildId)));
    }

    @Override
    public List<MemberDCDto> getGuildMembers(Long guildId) {
        return guildMemberCustomMapper.toMemberListDCDto(guildService.getGuildMembers(Snowflake.of(guildId)));
    }
}

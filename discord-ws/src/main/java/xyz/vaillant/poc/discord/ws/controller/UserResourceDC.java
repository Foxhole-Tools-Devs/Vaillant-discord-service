package xyz.vaillant.poc.discord.ws.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;
import xyz.vaillant.poc.discord.bot.model.GuildMember;
import xyz.vaillant.poc.discord.bot.service.UserService;
import xyz.vaillant.poc.discord.core.api.UserDCApi;
import xyz.vaillant.poc.discord.core.dto.GuildMemberDCDto;
import xyz.vaillant.poc.discord.ws.mapper.GuildMemberCustomMapper;

@RestController
@RequiredArgsConstructor
public class UserResourceDC implements UserDCApi {

    private final UserService userService;

    private final GuildMemberCustomMapper guildMemberCustomMapper;

    @Override
    public Iterable<GuildMemberDCDto> getAllUserGuilds(Long userId) {
        return userService.getUsersGuildsMembers(userId).stream().map(guildMember -> {
            var rep = new GuildMemberDCDto();

            rep.setId(guildMember.getId());
            rep.setLogo(guildMember.getLogo());
            rep.setName(guildMember.getName());
            rep.setMember(guildMemberCustomMapper.toMemberDCDto(guildMember.getMember()));

            return rep;
        }).toList();
    }
}

package xyz.vaillant.poc.discord.ws.mapper.implementation;

import discord4j.core.object.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import xyz.vaillant.poc.discord.core.dto.MemberDCDto;
import xyz.vaillant.poc.discord.ws.mapper.GuildMemberCustomMapper;
import xyz.vaillant.poc.discord.ws.mapper.GuildRoleCustomMapper;

import java.util.List;

@Component
@RequiredArgsConstructor
public class GuildMemberCustomMapperImpl implements GuildMemberCustomMapper {

    private final GuildRoleCustomMapper guildRoleCustomMapper;

    @Override
    public MemberDCDto toMemberDCDto(Member member) {
        var rep = new MemberDCDto();

        rep.setName(member.getDisplayName());
        rep.setId(member.getId().asLong());
        rep.setRoles(guildRoleCustomMapper.toListRoleDCDto(member.getRoles().collectList().block()));

        return rep;
    }

    @Override
    public List<MemberDCDto> toMemberListDCDto(List<Member> members) {
        return members.stream().map(this::toMemberDCDto).toList();
    }
}

package xyz.vaillant.poc.discord.ws.mapper;

import discord4j.core.object.entity.Member;
import xyz.vaillant.poc.discord.core.dto.MemberDCDto;

import java.util.List;

public interface GuildMemberCustomMapper {

    MemberDCDto toMemberDCDto(Member member);

    List<MemberDCDto> toMemberListDCDto(List<Member> members);
}
